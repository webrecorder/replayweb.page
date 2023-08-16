---
layout: default
title: Configuring Server CORS
nav_order: 4
permalink: /docs/cors-settings
---

ReplayWeb.page doesn't require any specific server side settings, just the ability to server file and respond to `Range` requests,
loading parts of files. It can load files from any web server. However, a common obstacle is configuring CORS settings to give
ReplayWeb.page access to the data.

# Configuring CORS

Browsers restrict access to files hosted on a different domain than the websites that is trying to load them for security reasons.

If you are loading web archives hosted on a different domain (for example, S3 or other cloud storage) and your site is hosted on a different domain,
the site hosting the file needs to 'allow' the website to load the file using special CORS (Cross-Origin Resource Sharing) headers.

These settings apply whenever the archive is hosted on a different domain than the viewer, so if you are loading via our main ReplayWeb.page site, you need to grant access to *https://replayweb.page* to load these archives.

The minimum requirement is to return an `Access-Control-Allow-Origin: https://replayweb.page` and most CORS settings include at least this option.

## Differences between Chrome and Firefox and Safari

Unfortunately, different browsers have diverged in how they handle in enforcing the CORS policy.

At the moment, it seems Firefox and Safari sometimes send a [pre-flight OPTIONS request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request) when handling ReplayWeb.page requests, because the ReplayWeb.page uses the `Range` header.

Chrome currently considers it a 'safe' header, but the other browsers have not yet made this change.

To be compatible with all browsers, we recommend including all headers as 'allowed headers' for use with ReplayWeb.page, eg.
by setting `Access-Control-Allow-Headers: '*'` as part of the CORS response in addition to `Access-Control-Allow-Origin`.

The following provides different ways of configuring CORS for different hosting environments.


## S3 and Compatible Configurations

If you are hosting from S3 or S3-compatible service, here are a few CORS bucket configurations that should work.

Amazon S3 and other services now support a JSON based bucket policy, as well as an older XML-based policy.

The below examples provide access to `https://replayweb.page` to load your archive.
If you are instead [embedding replayweb.page](./embedding), replace that with the server (origin) of the URL where the `<replay-web-page>` embed is hosted.

Both JSON and XML options provide a way to specify multiple origins via the JSON list or multiple `<AllowedOrigin>` tags

### JSON-Based Configuration

The JSON-based configuration will look as follows:

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

### XML-Based Configuration


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

One way to set this policy is to use the popular [s3cmd](https://s3tools.org/usage) command-line tool:

1) Paste the above snippet into a file, eg. `cors.xml`
2) Be sure to set the 'Allowed Origin' to the site hosting the embed. You can add as many of these as necessary.
3) Run `s3cmd setcors ./cors.xml s3://<your-bucket>`

See the s3cmd docs for how to configure it s3cmd to work with your setup.

See [S3 Docs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManageCorsUsing.html) for more info on how to set this policy.

Other cloud providers may have a similar settings for configuring CORS.

## Manual Setup / Nginx

The recommended setup for nginx is to include the following CORS settings.
As above, you can replay `https://replayweb.page` with your domain:

```nginx
location / {
     if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Origin' 'https://replayweb.page';
        add_header 'Access-Control-Allow-Methods' 'GET, HEAD, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' '*'
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

For more examples of CORS configurations for different servers, see: [https://enable-cors.org/](https://enable-cors.org/)


