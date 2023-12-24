# Configuring CORS

## Primer

ReplayWeb.page can can load files from any web server, but works best when the server hosting the archived content can respond to `Range` requests.  That being said, a common obstacle is configuring Cross-Origin Resource Sharing (CORS) settings to give ReplayWeb.page access to the data when content is being hosted from a different server than the webpage where it is embedded.

Browsers typically restrict access to files hosted on a different domain than the website they are trying to load for security reasons.

If you are loading archived items from a different domain (for example, S3 or other cloud storage), the site hosting the file needs to 'allow' the website to load the file using special CORS headers.

These settings apply whenever archived items are hosted on a different domain than the viewer. If you are loading via the [https://replayweb.page](https://replayweb.page) site, you need to grant access to `https://replayweb.page` to load these items.

The minimum requirement is to return: `Access-Control-Allow-Origin: https://replayweb.page` and most CORS settings include at least this option.

## Differences Between Chrome, Firefox, and Safari

Unfortunately, browsers have diverged in how they handle enforcing CORS policies.

Firefox and Safari sometimes send a [pre-flight OPTIONS request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request) when handling ReplayWeb.page requests, because the ReplayWeb.page uses the `Range` header.

Chrome currently considers it a 'safe' header, but the other browsers have not yet made this change.

For best compatibility with all browsers, we recommend including all headers as 'allowed headers' for use with ReplayWeb.page, eg.
by setting `Access-Control-Allow-Headers: '*'` as part of the CORS response in addition to `Access-Control-Allow-Origin`.

## CORS Configurations for Common Hosting Environments

The following section provides suggested CORS configurations for different hosting environments. For more examples of CORS configurations for different servers, see: [https://enable-cors.org/](https://enable-cors.org/)

### S3 and Compatible Configurations

When hosting with Amazon S3 or an S3-compatible service, these CORS bucket configurations _should_ work.

Amazon S3 and other services now support a JSON based bucket policy, as well as an older XML-based policy.

The below examples provide access to `https://replayweb.page` to load your archive. When [embedding replayweb.page](./embedding), replace the URL with that of the server (origin) URL where the `#!html <replay-web-page>` embed is hosted.

Both the JSON and XML options provide a method of specifying multiple origins via the JSON list or multiple `#!xml <AllowedOrigin>` tags.

#### JSON-Based Configuration

```json
[
  {
    "AllowedOrigins": [
      "https://replayweb.page"
    ],
    "AllowedMethods": [
      "GET",
      "HEAD"
    ],
    "AllowedHeaders": [
      "*"
    ]
  }
]
```

#### XML-Based Configuration

```xml
<CORSConfiguration
xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
  <AllowedMethod>GET</AllowedMethod>
  <AllowedMethod>HEAD</AllowedMethod>
  <AllowedOrigin>https://replayweb.page</AllowedOrigin>
  <AllowedHeader>*</AllowedHeader>
  <ExposeHeader>Content-Range</ExposeHeader>
  <ExposeHeader>Content-Encoding</ExposeHeader>
  <ExposeHeader>Content-Length</ExposeHeader>
</CORSRule>
</CORSConfiguration>
```

This policy can be applied using the [s3cmd](https://s3tools.org/usage) command-line tool:

1. Paste the above snippet into a file, eg. `cors.xml`
2. Set the `#!xml <AllowedOrigin>` URL to the site hosting the embed. You can add as many of these as necessary.
3. Run `s3cmd setcors ./cors.xml s3://<your-bucket>` to apply the settings from the XML file to the selected S3 bucket.

See the s3cmd docs for how to configure s3cmd to work with your setup.

See [S3 Docs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManageCorsUsing.html) for more info on how to set this policy.

Other cloud providers may have a similar settings for configuring CORS.

### Manual Setup / Nginx

The recommended setup for nginx is to include the following CORS settings. Like the above, when [embedding replayweb.page](./embedding), replace the URL with that of the server (origin) URL where the `#!html <replay-web-page>` embed is hosted.

```nginx
location / {
     if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Origin' 'https://replayweb.page';
        add_header 'Access-Control-Allow-Methods' 'GET, HEAD, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' '*' ;
        return 204;
     }

     if ($request_method = 'GET') {
        add_header 'Access-Control-Allow-Origin' 'https://replayweb.page' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' '*' always;
        add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range' always;
     }
}
```
