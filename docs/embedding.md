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
<script src="https://cdn.jsdelivr.net/npm/replaywebpage/@{{ site.version }}/ui.js"></script>
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
importScripts("https://cdn.jsdelivr.net/npm/replaywebpage/@{{ site.version }}/sw.js");
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
| `source`     | Source URL for the archive file. It should be a URL in one of the [supported formats](/docs/formats) loaded from one of the [support locations](/docs/locations) and is required. If it is a relative URL, it will be evaluated relative to `replayBase`. |
| `url`        | The starting URL to load from the archive. If omitted, will start with the page list or URL search view. |
| `ts`         | The timestamp of the starting URL to load. If omitted, the latest available version is used. |
| `deepLink`   | (`true` / `false`) if set to true, allow 'deep linking' to exact pages in the embed, besides the starting URL. |
| `embed`      | (`default` / `full` / `replayonly` ) - if set to `full`, will show the replayweb.page nav bar and logo. if set to `default`, omitted, will show the location bar. if set to `replayonly`, will only show the `url` and not location bar or any nav bar buttons, which may be useful for embedding a single page only. |
| `replayBase` | Location of the `sw.js` file, defaults to `./replay/` as mentioned above, but can be overridden. |
| `coll`       | Internal id for this collection, usually generated automatically.
| `config`     | Extra per collection config options (such as custom fuzzy matching rules, TODO add more info!) |


### Versioning

Note that the above example uses the paths as, which is a CDN for Javascript packages:

- `https://cdn.jsdelivr.net/npm/replaywebpage@{{ site.version }}/ui.js`
- `https://cdn.jsdelivr.net/npm/replaywebpage@{{ site.version }}/sw.js`

Another alternative using a different would be:

- `https://unpkg.com/replaywebpage@{{ site.version }}/ui.js`
- `https://unpkg.com/replaywebpage@{{ site.version }}/sw.js`

These URLs point to a specific version of ReplayWeb.page software released on NPM, eg. `{{ site.version }}`, meaning that your replay should stay stable, even if ReplayWeb.page is updated.

You can choose another of ReplayWeb.page (or even try different versions) to ensure that you have the best available replay.

This addresses the potential issue of older sites breaking when web archive replay software is updated.

For production use, it is advised against linking to the latest version, eg. `https://replayweb.page/ui.js`
and `https://replayweb.page/sw.js` as these will be updated frequently and make break your embed.

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
```

See [S3 Docs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManageCorsUsing.html) for more info on how to set this policy.

Other cloud providers may have a similar settings for configuring CORS.

