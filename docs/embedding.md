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
<script src="https://unpkg.com/replaywebpage@1.0.0/ui.js"></script>
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
importScripts("https://unpkg.com/replaywebpage@1.0.0/sw.js");
```

Thus, if the HTML snippet was added to `https://my-site.example.com/path/my-web-archive-embed.html`
then the sw.js should be added such that it is at: `https://my-site.example.com/path/replay/sw.js`.

That's it! Loading `https://my-site.example.com/path/my-web-archive-embed.html` should now load the web archive.

(Be sure to add sizes to the `<replay-web-page>` tag as needed to size the embed).

You can replace `s3://webrecorder-builds/warcs/netpreserve-twitter.warc` with any web archive hosted on your site,
eg.  `https://my-site.example.com/warcs/my-warc-file.warc`.

{:  .fs-3 .pad .bg-grey-lt-100}
If the file is loaded from a different origin, your site must have CORS access to download the web archive.


### Versioning

Note that the above example uses the paths as:

- `https://unpkg.com/replaywebpage@1.0.0/ui.js`
- `https://unpkg.com/replaywebpage@1.0.0/sw.js`

Another alternative would be:

- `https://cdn.jsdelivr.net/npm/replaywebpage@1.0.0/ui.js`
- `https://cdn.jsdelivr.net/npm/replaywebpage@1.0.0/sw.js`

These URLs point to a specific version of ReplayWeb.page software released on NPM, eg. `1.0.0`, meaning that your replay should stay stable, even if ReplayWeb.page is updated.

You can choose another of ReplayWeb.page (or even try different versions) to ensure that you have the best available replay.

This addresses the potential issue of older sites breaking when web archive replay software is updated.

For production use, it is advised against linking to the latest version, eg. `https://replayweb.page/ui.js`
and `https://replayweb.page/sw.js` as these will be updated frequently and make break your embed.




