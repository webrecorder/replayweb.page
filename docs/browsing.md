---
layout: default
title: Browsing Web Archives
nav_order: 1
parent: Usage
permalink: /docs/browsing
---

# Browsing Web Archives via the ReplayWeb.page
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


## Loading Web Archives

Using [https://replayweb.page](https://replayweb.page), you can select a web archive file from a local
file or remote URL to load into the site.

Archives loaded by ReplayWeb.page are identified by their unique URL, which can be entered directly or selected from a local file browser.


### Remote Archives

To load a remote archive, simply enter the URL of the archive and click `Replay!`.
(See: [Supported Locations](locations.md) for details on where archives can be loaded from).

The archive will be downloaded, either fully or [only as needed (if possible)](streaming-archives.md) and presented on the archive page.

The system supports WARC files, as well as several other formats (See: [Supported Formats](formats.md) for more details on supported formats)

Once loaded, the page is redirected to the archive collection page.


### Local Archives

Using the `Choose File` button, you can pick any local archive file to load for replay. 
The click `Replay` to load the file. 

The archive is laoded in the browser directly and *not* uploaded anywhere -- it never leaves your computer!

(This process is similar to how [Webrecorder Player](https://github.com/webrecorder/webrecorder-player) works, but happens entirely in the browser.


It will be identified by a `file://` URL and is not accessible outside your browser.


## Archive View

Once an archive is loaded, you are taken to the archive view, and you are ready to explore and replay the web archive!

This view has several tabs:

- **Curated Pages** - This tab exists if the archive has curated lists of pages. Currently this is available only for Webrecorder WARCs, but may be possible
with other formats (see: [Web Archive Zip Format](webarchive-zip-format.md)

- **URL Resources** - This tab allows searching the archive by URLs, as well as by MIME type. For many archives with no page or curatorial metadata, this is
a way to explore the archive data in more detail.

Once a URL is selected, you will be taken to the Replay tab which renders the archived page directly in your browser.


## Index of Archives

The ReplayWeb.page homepage lists an index of all archives loaded in your browser. 
Once loaded, the archive remains cached in the browser for quick access. This view will be unique to your browser.
To remove the archive from your browser, click on the 'X'. (Of course, this does not delete the archive from its original location, only your local copy of it)


<hr>
Next: [Sharing Links to Archived Pages](linking.md)




