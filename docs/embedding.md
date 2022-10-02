---
layout: default
title: Embedding ReplayWeb.page
nav_order: 3
permalink: /docs/embedding
---

## Embedding Web Archives with ReplayWeb.page

A key goal of ReplayWeb.page is to make embedding web archives into other sites as easy as it is to embed media files like images and PDFs.

To make this possible ReplayWeb.page provides the `<replay-web-page>` HTML web component to support embedding in the pages where you would like to display web archives. This component works in all modern browsers, and has several configuration options that allow you to control things like the initial URL or snapshot to display from the archive when the component loads. The component allows you to load WACZ files that are created with Webrecorder tools, as well as standalone WARC files.

For the web component to work you need to load the *frontend* user interface and the *backend* service worker into your web page, and then point a `<replay-web-page>` component at your WACZ file. The *frontend* defines the `<replay-web-page>` web component itself, and the backend service worker is responsible for retrieving data on demand from your web archive file. The backend pulls resources from the WACZ file *on-demand* as they are requested, so full retrieval of the WACZ to the browser is *not* required. The frontend and backend are just static JavaScript assets which you can choose to load from a Content Delivery Network (CDN) or directly from your website if you would like to host them yourself.

For example, to embed a WACZ web archive stored at `https://replayweb.page/docs/assets/example.wacz` you first need to add the following snippet to your HTML page to load the user interface and use the `<replay-web-page>` component to point to the WACZ:

{: .bg-blue-000 .text-grey-lt-000 .cap-header}
my-web-archive-embed.html

```html
<script src="https://cdn.jsdelivr.net/npm/replaywebpage@{{ site.data.package.version }}/ui.js"></script>

<replay-web-page source="https://replayweb.page/docs/assets/example.wacz"
url="https://webrecorder.net"></replay-web-page>
```

The first line loads version {{ site.data.package.version }} of the ui from the jsDelivr content delivery network. And the second instantiates the ReplayWebPage component using the `source` attribute to point to the location of the WACZ file on the web (in this case published on AWS S3). The `url` attribute is used to indicate what URL to display from the archive after the component loads.

ReplayWeb.page's backend is a [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) which intercepts requests for URLs and looks for them in your WACZ file. Service workers are just JavaScript files, but it is necessary to add a service worker path from where the web archive will be served. This allows the service worker to catch requests only from the scope of the current page. To do this create a subdirectory (eg. `replay/`) and place the following one-line script in it:

{: .bg-blue-000 .text-grey-lt-000 .cap-header}
./replay/sw.js

```javascript
importScripts("https://cdn.jsdelivr.net/npm/replaywebpage@{{ site.data.package.version }}/sw.js");
```

If the HTML snippet was added to `https://my-site.example.com/path/my-web-archive-embed.html`
then the `sw.js` should be added such that it is at: `https://my-site.example.com/path/replay/sw.js`.

That's it! Loading `https://my-site.example.com/path/my-web-archive-embed.html` should now load the web archive.

Be sure to add width and height styles to the `<replay-web-page>` tag as needed to size the embed.

You can replace `https://replayweb.page/docs/assets/example.wacz` with any web archive hosted on your site.

{:  .fs-3 .pad .bg-grey-lt-100}
If the file is loaded from a different origin, your site must have CORS access to download the web archive.
<br>See [CORS restrictions](#cors-restrictions) below for more info.

### Self Hosting

Sometimes it can be desirable to *self-host* the user interface, service worker, and WACZ files. This is useful in situations where you want to prevent tracking by CDNs, or to make it easier to host the content in one place without needing to work out the details of Cross Origin Resource Sharing (CORS). Self-hosting is easy if you follow the same steps as above, but instead of loading the JavaScript and WACZ file from external locations you will need to [download](https://www.jsdelivr.com/package/npm/replaywebpage) the `ui.js` and `sw.js` JavaScript files and put them on the same server as the HTML that you are publishing.

For example if you are publishing a page at `https://my-site.example.com/path/my-web-archive-embed.html` you could adjust the &lt;script&gt; element to load the ui from a location on your website:

```html
<script src="ui.js"></script>

<replay-web-page source="example.wacz" url="https://webrecorder.net"></replay-web-page>
```

The following URLs would then need to resolve correctly:

* https://my-site.example.com/path/my-web-archive-embed.html
* https://my-site.example.com/path/example.wacz
* https://my-site.example.com/path/ui.js
* https://my-site.example.com/path/replay/sw.js

If you want to embed more than one web archive on your site it can be helpful to centralise the location of the frontend and backend JavaScript and potentially WACZ files. The &lt;replay-web-page&gt; component has a `replayBase` attribute that lets you define the location to load the `sw.js` service worker from. By default, `replayBase` is set to `./replay/` and so the service worker is loaded from `./replay/sw.js`. For example if you publish your JavaScript files at:

* https://my-site.example.com/js/ui.js
* https://my-site.example.com/js/sw.js
* https://my-site.example.com/wacz/example.wacz

Then you adjust your HTML to reference the new resources:

```html
<script src="/js/ui.js"></script>

<replay-web-page replayBase="/js/" source="/wacz/example.wacz" url="https://webrecorder.net"></replay-web-page>
```

For a working example of hosting multiple web archives take a look at our *example-webarchive* [repository](https://github.com/webrecorder/example-webarchive/) and [static website](https://webrecorder.github.io/example-webarchive) which hosted on Github pages. It may give you ideas for how to integrate the ReplayWeb.page component into your site You may also be interested in [Web Replay Gen](https://github.com/webrecorder/web-replay-gen) which is an 11ty based static site builder for a web archive of WACZ files.

### Embedding Options

The `<replay-web-page>` tag is a web component that supports a number of additional attributes:

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
| `noCache`    | if set, will not cache any loaded content HTTP responses locally, always loading from original source. |
| `hideOffscreen` | if set, will unload the embed when it is not visible and reload when scrolled into view. Useful if multiple embeds per-page to avoid loading all at once. |
| `newWindowBase` | set base replay URL loaded when a page opens a new window, defaults to `https://replayweb.page/` if `deepLink` not enabled, otherwise, to current page with new link. |


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

