---
layout: default
title: Embedding ReplayWeb.page
nav_order: 3
permalink: /docs/embedding
---

## Embedding Web Archives with ReplayWeb.page

A key goal of ReplayWeb.page is to make embedding web archives into other sites as easily as possible,
as easy as it is to embed PDFs, for example.

ReplayWeb.page provides the `<replay-web-page>` HTML tag to support embedding.

Embedding requires just two parts, loading the frontend ui and the backend service worker.

For example, to embed a web archive stored on s3 at `s3://webrecorder-builds/warcs/netpreserve-twitter.warc`
(shorthand for: `https://webrecorder-builds.s3.amazonaws.com/warcs/netpreserve-twitter.warc`), you can first add
the following snippet to your HTML page:


{: .bg-blue-000 .text-grey-lt-000 .cap-header}
my-web-archive-embed.html

```html
<script src="https://cdn.jsdelivr.net/npm/replaywebpage@{{ site.data.package.version }}/ui.js"></script>
<replay-web-page source="s3://webrecorder-builds/warcs/netpreserve-twitter.warc"
url="https://twitter.com/netpreserve"></replay-web-page>
```

This will load the frontend UI.

Since ReplayWeb.page requires a service worker, it is necessary to add a service worker path
from where the web archive will be served. Create a subdirectory (eg. `replay/`) and place the following
one-line script


{: .bg-blue-000 .text-grey-lt-000 .cap-header}
./replay/sw.js

```javascript
importScripts("https://cdn.jsdelivr.net/npm/replaywebpage@{{ site.data.package.version }}/sw.js");
```

Thus, if the HTML snippet was added to `https://my-site.example.com/path/my-web-archive-embed.html`
then the sw.js should be added such that it is at: `https://my-site.example.com/path/replay/sw.js`.

That's it! Loading `https://my-site.example.com/path/my-web-archive-embed.html` should now load the web archive.

(Be sure to add width and height styles to the `<replay-web-page>` tag as needed to size the embed).

You can replace `s3://webrecorder-builds/warcs/netpreserve-twitter.warc` with any web archive hosted on your site,
eg.  `https://my-site.example.com/warcs/my-warc-file.warc`.

{:  .fs-3 .pad .bg-grey-lt-100}
If the file is loaded from a different origin, your site must have CORS access to download the web archive.
<br>See [CORS restrictions](#cors-restrictions) below for more info.


### Embedding Options

The `<replay-web-page>` tag is a web component and supports a number of additional attributes:

| Attribute    | Description      |
|:-------------|:-----------------|
| `source`     | Source URL for the archive file. It should be a URL in one of the [supported formats](/docs/formats) loaded from one of the [support locations](/docs/locations) and is required. |
| `url`        | The starting URL to load from the archive. If omitted, will start with the page list or URL search view. |
| `ts`         | The timestamp of the starting URL to load. If omitted, the latest available version is used. |
| `deepLink`   | if set, allow 'deep linking' to exact pages in the embed, besides the starting URL. |
| `embed`      | (`default` / `full` / `replayonly` ) - if set to `full`, will show the replayweb.page nav bar and logo. if set to `default`, omitted, will show the location bar. if set to `replayonly`, will only show the `url` and not location bar or any nav bar buttons, which may be useful for embedding a single page only. |
| `replayBase` | Location of the `sw.js` file, defaults to `./replay/` as mentioned above, but can be overridden. |
| `coll`       | Internal id for this collection, usually generated automatically.
| `config`     | Extra per collection config options (such as custom fuzzy matching rules, TODO add more info!) |
| `noSandbox`  | if set, don't wrap iframe in `sandbox`. Used as extra precaution to avoid escaping iframe, but prevents PDFs from loading in embed archive. Set for archives of known/trusted sites. |
| `noWebWorker`| if set, will not use Web Worker for loading, only Service Worker. May be useful for certain loading edge cases. |


### Versioning

Note that the above example uses the paths as, which is a CDN for Javascript packages at a specific version:

- `https://cdn.jsdelivr.net/npm/replaywebpage@{{ site.data.package.version }}/ui.js`
- `https://cdn.jsdelivr.net/npm/replaywebpage@{{ site.data.package.version }}/sw.js`

These URLs point to a specific version of ReplayWeb.page software released on NPM, eg. `{{ site.data.package.version }}`, meaning that your replay should stay stable, even if ReplayWeb.page is updated.

Although ReplayWeb.page strives to remain backwards compatible, this addresses any potential issue of older embeds breaking when the replay system is updated.

You can also use the latest stable release by omitting the version, and the URL will automatically load the latest published release:

- `https://cdn.jsdelivr.net/npm/replaywebpage/ui.js`
- `https://cdn.jsdelivr.net/npm/replaywebpage/sw.js`

This is not recommended for full production use as this is more likely to break in case there is a breaking change.

For testing the very latest, it is possible to simply link to replayweb.page itself, eg. `https://replayweb.page/ui.js`
and `https://replayweb.page/sw.js` but these are updated the most frequently and more likely to break.

For production use, it is recommended to use a fixed version and explicitly upgrade as necessary.


## Common Issues

Below are some possible issues that you may encounter when embedding and possible workarounds.


### Embed is too small / doesn't fill page.

If the `<replay-web-page>` tag is the only element on a page, and you want it to use the full window width and height, adding the following
style should fix the issue:

```html
<style>
html, body {
  width: 100%;
  height: 100%;
}
</style>
```

### CORS restrictions

Browsers restrict access to files hosted on a different domain than the websites that is trying to load them.
If you are loading web archives hosted on a different domain (for example, S3 or other cloud storage) and your site is hosted on a different domain,
the site hosting the file needs to 'allow' the website to load the file using special CORS (Cross-Origin Resource Sharing) headers.

If you are hosting from S3 or S3-compatible service, here is a potential CORS bucket configuration that should work.

Replace `https://myarchive.example.com` with the server (origin) of the URL where the `<replay-web-page>` embed is hosted.

```xml
<CORSConfiguration
xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
	<AllowedMethod>GET</AllowedMethod>
	<AllowedMethod>HEAD</AllowedMethod>
	<AllowedOrigin>https://myarchive.example.com</AllowedOrigin>
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

