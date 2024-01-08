# Embedding ReplayWeb.page

## Primer

A key goal of ReplayWeb.page is to make embedding archived web content into other sites as easy as embedding other media like images and PDFs.

To make this possible ReplayWeb.page provides the `#!html <replay-web-page>` HTML web component to support embedding in the pages where you would like to display web archives. This component works in all modern browsers, and has several configuration options that allow for control over the initial URL or snapshot to display from the archive when the component loads. The component can load WACZ files that are created with Webrecorder tools, as well as standalone WARC files.

The `#!html <replay-web-page>` web component requires a backend service worker to be loaded by your website. While the frontend and backend are both static JavaScript assets which can be loaded from a CDN (Content Delivery Network), the backend service worker JavaScript file must be served from your website. This service worker is responsible for retrieving data on demand from your web archive file. 

!!! tip "Tip: Serving web archives efficiently with WACZ files"
    While other web archive filetypes may require ReplayWeb.page to download them in their entirety before viewing, WACZ files allow the service worker to pull individual resources from the file as they are requested by the user. Full retrieval of the WACZ by ReplayWeb.page is *not* required as long as the server delivering the WACZ file supports HTTP range requests. This means that serving archived content from WACZ files is effectively as bandwidth efficient as any other web content!

## Example

### Loading the Frontend

To embed a WACZ stored at `https://replayweb.page/docs/assets/tweet-example.wacz`, add the following `#!html <script>` tag to your HTML page to load the user interface from the jsDelivr CDN, and use the `#!html <replay-web-page>` component to point to the WACZ:

```html
<script src="https://cdn.jsdelivr.net/npm/replaywebpage@{{ rwp_version }}/ui.js"></script>

<replay-web-page source="https://replayweb.page/docs/assets/tweet-example.wacz"
url="https://oembed.link/https://twitter.com/webrecorder_io/status/1565881026215219200"></replay-web-page>
```

In this example, the `source` attribute is pointing to the location of the WACZ file (in this case published on AWS S3) and the `url` attribute is used to indicate what URL to display from the archived item after the component loads.

### Loading the Backend

ReplayWeb.page's backend is a [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) which intercepts requests for URLs and looks for them in your loaded archived item. Service workers are just JavaScript files, but it is necessary to add a service worker path from where the web archive will be served. This allows the service worker to catch requests only from the scope of the current page.

To do this, create a `/replay` subdirectory and in it, a new JavaScript file (`/replay/sw.js`) and copy the following to the file:

```javascript
importScripts("https://cdn.jsdelivr.net/npm/replaywebpage@{{ rwp_version }}/sw.js");
```

If the HTML above was added to `https://example.com/path/my-web-archive-embed.html`
then the `sw.js` should be added such that it is at: `https://example.com/path/replay/sw.js`.

That's it! Loading `https://example.com/path/my-web-archive-embed.html` should now load the web archive.

Be sure to add width and height styles to the `#!html <replay-web-page>` tag as needed to scale the embed, and replace `https://replayweb.page/docs/assets/example.wacz` with any web archive hosted on your site.

??? Info "Info: Loading files from different servers"
    If the file is loaded from a different origin, your site must have Cross Origin Resource Sharing (CORS) access to download the web archive.
    <br>See [Loading Errors](#loading-errors) below for more info.

??? Tip "Best Practice: Controlling ReplayWeb.page versions"

    The above example uses the version number "{{ rwp_version }}" in paths to load a specific version of ReplayWeb.page from a CDN. These URLs point to a specific version of ReplayWeb.page software released on NPM, meaning that your replay viewer should stay stable, even if ReplayWeb.page is updated.
    
    - `https://cdn.jsdelivr.net/npm/replaywebpage@{{ rwp_version }}/ui.js`
    - `https://cdn.jsdelivr.net/npm/replaywebpage@{{ rwp_version }}/sw.js`

    Although ReplayWeb.page strives to remain backwards compatible, this addresses any potential issue of older embeds breaking when the replay system is updated.

    You can also use the latest stable release by omitting the version, and the URL will automatically load the latest published release:

    - `https://cdn.jsdelivr.net/npm/replaywebpage/ui.js`
    - `https://cdn.jsdelivr.net/npm/replaywebpage/sw.js`

    This is not recommended for production use as this is more likely to break in case there is a breaking change.

    For testing the very latest, it is possible to simply link to replayweb.page itself, eg. `https://replayweb.page/ui.js`
    and `https://replayweb.page/sw.js` but these are updated the most frequently and more likely to break.

    For production use, it is recommended to use a fixed version and explicitly upgrade as necessary.

## Self Hosting

Sometimes it can be desirable to self-host the user interface, service worker, and WACZ files. This is useful for preventing tracking by CDNs, or to make it easier to host the content in one place without needing to work out the details of Cross Origin Resource Sharing (CORS). 

Following the same steps above, instead of loading the JavaScript and WACZ file from external locations, [download](https://www.jsdelivr.com/package/npm/replaywebpage) the `ui.js` and `sw.js` JavaScript files and put them on the same server as the HTML that you are publishing. Link them accordingly replacing the CDN links in the guide above.

### Example 

If you are publishing a page at `https://example.com/path/my-web-archive-embed.html`, adjust the `#!html <script>` element to load the ui from a location on your website:

```html
<script src="ui.js"></script>

<replay-web-page source="example.wacz" url="https://webrecorder.net"></replay-web-page>
```

The following URLs would then need to resolve correctly:

* https://example.com/path/my-web-archive-embed.html
* https://example.com/path/example.wacz
* https://example.com/path/ui.js
* https://example.com/path/replay/sw.js

When embedding more than one web archive on your site it can be helpful to centralize the location of the frontend and backend JavaScript, and potentially WACZ files. The `#!html <replay-web-page>` component has a `replayBase` attribute that lets you define the location to load the `sw.js` service worker from. By default, `replayBase` is set to `./replay/` and so the service worker is loaded from `./replay/sw.js`.

For example, if you publish your JavaScript files at:

* https://example.com/js/ui.js
* https://example.com/js/sw.js
* https://example.com/wacz/example.wacz

Then you must adjust your HTML to reference the new resources:

```html
<script src=""/js/ui.js""></script>

<replay-web-page replayBase="/js/" source="/wacz/example.wacz" url="https://webrecorder.net"></replay-web-page>
```

## Embed Modes

ReplayWeb.page offers four different ways to embed the archived content, including with or without the navigation UI, and with an archival information dropdown. The embed mode can be set via the `embed` property:

- `default` or not set: Show the replay page and the location bar, allowing navigation to other pages and accessing the page list.

- `full`: Show the full replayweb.page UI and logo.

- `replayonly`: Show just the replayed page, and no additional UI or nav bar buttons. Useful for embedding a single page.

- `replay-with-info`: Show the `replayonly` mode, but also add an archive info dropdown, which shows an archival 'receipt' with provenance and verification information (new in 1.7.0)

??? example "Example: Embed with `replay-with-info` enabled"
    <script src="https://cdn.jsdelivr.net/npm/replaywebpage/ui.js"></script>

    <replay-web-page style="height: 600px" loading="eager" embed="replay-with-info" replaybase="../../js/" source="../../assets/tweet-example.wacz"
    url="https://oembed.link/https://twitter.com/webrecorder_io/status/1565881026215219200"></replay-web-page>

## Embedding Options

The `#!html <replay-web-page>` tag is a web component that supports a number of additional attributes:

| Attribute    | Description      |
|:-------------|:-----------------|
| `source`     | Source URL for the archived item. This should be one of the [supported formats](/user-guide#supported-formats) loaded from one of the [support locations](/develop/locations) and is required. |
| `url`        | The starting URL to load from the archive. If omitted, will start with the page list or URL search view. |
| `ts`         | The timestamp of the starting URL to load. If omitted, the latest available version is used. |
| `deepLink`   | If set, ReplayWeb.page will modify the URL of the page to allow for 'deep linking' to exact pages in the embed. |
| `embed`      | (`default` / `full` / `replayonly` / `replay-with-info` ) - See [Embed Modes](#embed-modes) above.
| `swName`     | Service Worker filename (default: `sw.js`). Set if using different name, don't include path, only filename |
| `replayBase` | Location of the service worker file (eg. sw.js), defaults to `./replay/` as mentioned above, but can be overridden. |
| `coll`       | Internal ID for this collection, usually generated automatically.
| `config`     | Extra per collection config options (such as custom fuzzy matching rules, TODO add more info!) |
| `sandbox`    | If set, will iframe in `sandbox`. Provides extra isolation, but prevents PDFs from loading in an embed, and may result in links opening in new windows. |
| `noWebWorker`| If set, will not use Web Worker for loading, only Service Worker. May be useful for certain loading edge cases. |
| `noCache`    | If set, will not cache any loaded content HTTP responses locally, always loading from original source. |
| `hideOffscreen` | If set, will unload the embed when it is not visible and reload when scrolled into view. Useful if multiple embeds per-page to avoid loading all at once. |
| `newWindowBase` | set base replay URL loaded when a page opens a new window, defaults to `https://replayweb.page/` if `deepLink` not enabled, otherwise, to current page with new link. |
| `requireSubdomainIframe` | If set, will only load embed in an iframe loaded from a subdomain, for increased origin isolation. |
| `loading="eager"` | If set, will load the entire WACZ file at once (regardless of size), and not attempt on-demand range request loading. |
| `useRuffle` | If set, will enable include Ruffle Flash emulator. Must include the `ruffle/` directory in `replayBase`. |

## Further Examples

For an example of a site built around multiple archived items, take a look at our [example-webarchive repository](https://github.com/webrecorder/example-webarchive/) and [static website](https://webrecorder.github.io/example-webarchive) hosted on Github pages. It may give you ideas for how to integrate the ReplayWeb.page component into your site. You may also be interested in [Web Replay Gen](https://github.com/webrecorder/web-replay-gen), an 11ty based static site generator for showcasing multiple WACZ files.

## Common Issues

Below are some possible issues that you may encounter when embedding and possible workarounds.

### Embed is too small / doesn't fill page.

If the `#!HTML <replay-web-page>` tag is the only element on a page, and you want it to use the full window width and height, adding the following
CSS should fix the issue:

```css
html, body {
  width: 100%;
  height: 100%;
}
```

### Loading Errors

If you see errors related to loading archived items such as `TypeError: failed to load`, the issue may be a result of a CORS error.

See [CORS Settings](/develop/cors-settings) for more info on how to configure CORS for ReplayWeb.page
