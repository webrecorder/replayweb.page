---
layout: default
title: Exploring Web Archives
nav_order: 2
parent: About
permalink: /docs/exploring
---

## Exploring Archives (Browse, Search and Replay)


The ReplayWeb.page homepage lists an index of all loaded archives. You can also search by archive title or source
and filter by date loaded or title.

Once loaded, the archive remains cached in the browser for quick access. This view will be unique to your browser.
To remove the archive from your browser, click on the 'X'. (Of course, this does not delete the archive from its original location, only your local copy of it)

### Archive Views

Although primarily designed for replay, ReplayWeb.page also offers several ways to interact with web archives.

The archive view presents several tabs:

- **Story** - This Story view presents lists of curated pages, as developed by the creator of the web archive. 
This option is only shown if there is a curated story. As curated lists are not a standard part of WARC, only WARCs exported from Webrecorder.io/Conifer can have this option.

The new [Web Archive Collection (WACZ)](wacz-format) can also include curated lists.

- **Pages** - The Pages view presents all pages in the web archive. As pages are not a standard part of WARC format,
generally only WARCs from Webrecorder.io/Conifer will have pages.

The new [Web Archive Collection (WACZ)](wacz-format) can also store pages.


- **Page Resources** - This view allows searching the archive by URLs, as well as by common MIME type.

For many archives with no page or curatorial metadata, this is a way to explore the archive data in more detail.

This view is available for all archives that only store raw data.

- **Replay** - The view presents a replay of the archived web content in a mini-browser directly your browser. The view allows entering a URL directly. Clicking on links on any of the other views will switch to the **Replay** view.

### Search

Both the Page Resources view provide ways to search the archive directly.


#### Searching Page Resources
Page Resources allows searching by URL only, with additional sorting options.
Searches can be done by exact url, by url prefix, or by any string contained in the URL.

The URL Prefix option is best for searching large archives that require on-demand loading.
The contains option will not find any URLs that have not yet been loaded.


#### Searching Pages

The Page view search includes page titles, urls and page full text search, if available.

ReplayWeb.page will currently generate full ext search data from WARC pages automatically.

ReplayWeb.page will soon load existing extracted full-text data as well.


<hr>
Next: [Sharing Links to Archived Pages](sharing.md)
