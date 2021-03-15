---
layout: default
title: Online Use
nav_order: 1
parent: Loading Web Archives
permalink: /docs/loading_online
---
# Online Use
{: .no_toc }

Using [https://replayweb.page](https://replayweb.page), you can select a web archive file from a local file or enter their unique remote URL directly to load into the site.

<img alt="screenshot of replayweb.page (online)" src="/assets/replaywebpage-online.png">
<hr> 

## Browsing Web Archives via the ReplayWeb.page
{: .no_toc .text-delta }


1. 
{:toc}

### Loading Local Web Archives

From [https://replayweb.page](https://replayweb.page), use the `Choose File...` button. You can pick any local archive file from your computer to load for replay. 
The click `Load` to load the file. 

The archive is loaded in the browser directly and *not* uploaded anywhere -- it never leaves your computer!

The archive will be identified by a `file://` URL and is not accessible outside your browser. As expected,
this URL is not shareable.

{:  .fs-3 .pad .bg-grey-lt-100}
This behavior is similar to how [Webrecorder Player](https://github.com/webrecorder/webrecorder-player) worked, but happens entirely in the browser. <br>The [ReplayWeb.page App](https://github.com/webrecorder/replayweb.page/releases) is also an option for [opening local files when offline](offline#replaywebpage-as-standalone-desktop-electron-app)

<img alt="screenshot of replayweb.page (online)" src="/assets/replaywebpage-online-local.png">

<hr> 
### Loading Remote Web Archives

To load a remote archive, simply enter the URL of the archive and click `Load`.

{: .fs-3 .pad .bg-grey-lt-100}
See [Supported Locations](locations) for details on where archives can be loaded from.

The archive will be downloaded, either fully or on-demand (if possible) and presented on the archive page.

The system supports WARC files, as well as several other formats

{:  .fs-3 .pad .bg-grey-lt-100}
See: [Supported Formats](formats) for more details on supported formats.

<hr>

### Loading Remote Archives from Google Drive

ReplayWeb.page also supports loading archives directly from Google Drive.

You would first need to integrate replayReplayWeb.page, but it's a fairly easy integration. And once integrated, you can use it to open .warc, and .warc.gz files directly from Google Drive using the following steps.

1. Navigate to any WARC (.warc, .warc.gz) files or WACZ (Web archive collection) files that you have on Google Drive.

2. When you select the file, you should see an 'Open With ReplayWeb.page' option at the top.

3. Clicking on this should redirect to ReplayWeb.page and begin loading. Google Drive loaded archives will have a source URL starting with `googledrive://`.


#### Install [ReplayWeb.page Google Drive Integration](https://gsuite.google.com/u/2/marketplace/app/replaywebpage/160798412227)
* This is a Google Drive Add-On
* Click install and Google will walk you through the steps of installation
* Once installed, Google will confirm the install and where to find replayweb.page in your drive.

<img alt="screenshot of replayweb.page google drive add-on" src="/assets/replaywebpage-googledrive-install.gif">



<hr>
Once an archive has successfully loaded, you will be redirected to the archive view from where you can explore the archive.

Next:  [Exploring the Archive](/docs/exploring)






