---
layout: default
title: WACZ Format
nav_order: 1
permalink: /docs/wacz-format
parent: Reference
---

## Web Archive Collection Format Specification

ReplayWeb.page supports a new format for bundling raw web archive data (usually WARC files), indices,
page lists and other metadata into a single ZIP file.

The full spec for this format is available at: [https://github.com/webrecorder/web-archive-collection-format/blob/master/README.md](https://github.com/webrecorder/web-archive-collection-format/blob/master/README.md)

Files bundled into this format can use the .wacz (web archive collection zipped) file extension.

ReplayWeb.page will recognize this extension (as well as regular .zip) and will also load it from Google Drive when the
[Google Drive Integration](https://gsuite.google.com/u/2/marketplace/app/replaywebpage/160798412227) is installed.

The key benefit of this format is that large web archive collections can be loaded very quickly, to show the page list
and other key metadata, by downloading only parts of the WACZ file, as [outlined here](https://github.com/webrecorder/web-archive-collection-format/blob/master/README.md#appendix-a-use-case-random-access-to-web-archives-in-zip)

The actual raw content is loaded on-demand when the user requests each page.

With a WARC file, the entire contents must be loaded or indexed to determine the contents of the web archive collection.