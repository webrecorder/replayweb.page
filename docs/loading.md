---
layout: default
title: Loading Web Archives
nav_order: 1
parent: Usage
permalink: /docs/loading
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

Archives loaded by ReplayWeb.page are identified by their unique URL, which can be entered directly or selected from a local file chooser.

### Loading Local Web Archives

Using the `Choose File...` button, you can pick any local archive file to load for replay. 
The click `Load` to load the file. 

The archive is loaded in the browser directly and *not* uploaded anywhere -- it never leaves your computer!

The archive will be identified by a `file://` URL and is not accessible outside your browser. As expected,
this URL is not shareable.

{:  .fs-3 .pad .bg-grey-lt-100}
This behavior is similar to how [Webrecorder Player](https://github.com/webrecorder/webrecorder-player) worked, but happens entirely in the browser. <br>The [ReplayWeb.page App](https://github.com/webrecorder/replayweb.page/releases) is also an option for [opening local files when offline](offline#replaywebpage-as-standalone-desktop-electron-app)


### Loading Remote Web Archives

To load a remote archive, simply enter the URL of the archive and click `Load`.

{: .fs-3 .pad .bg-grey-lt-100}
See [Supported Locations](locations) for details on where archives can be loaded from.

The archive will be downloaded, either fully or on-demand (if possible) and presented on the archive page.

The system supports WARC files, as well as several other formats

{:  .fs-3 .pad .bg-grey-lt-100}
See: [Supported Formats](formats) for more details on supported formats.


### Loading Remote Archives from Google Drive

ReplayWeb.page also supports loading archives directly from Google Drive.

ReplayWeb.page can be used to open .warc, .warc.gz files directly from Google Drive using the following steps.

1. Install [ReplayWeb.page Google Drive Integration](https://gsuite.google.com/u/2/marketplace/app/replaywebpage/160798412227)

2. Navigate to any WARC (.warc, .warc.gz) files or WACZ (Web archive collection) files that you have on google drive.

3. You should see an 'Open With ReplayWeb.page' option at the top.

4. Clicking on this should redirect to ReplayWeb.page and begin loading. Google Drive loaded archives will have a source URL starting with `googledrive://`.


### Loading Large Files: Full vs On-Demand Loading

Due to the nature of the WARC format, the entire file must be read on first use to generate an index. 

For WARC files **>25MB**, only the index is initially stored in the browser, and the actual content is loaded 'on-demand',
when the content is first accessed. This leads to faster loading and saves memory when dealing with large archives.

[Web Archive Collection (WACZ)](wacz-format) are always loaded on-demand, as no indexing is required.
The initial archive view should load almost instantly as a result.

If an archive could not be loaded, an error will be displayed instead of the progress.
Please report any issues encountered via [GitHub Issues](https://github.com/webrecorder/replayweb.page/issues)

<hr>
Once an archive has successfully loaded, you will be redirected to the archive view from where you can explore the archive.

Next:  [Exploring the Archive](explore)






