---
layout: default
title: Sharing Web Archives
nav_order: 3
parent: Usage
permalink: /docs/sharing
---

## Sharing Links

ReplayWeb.page links are designed to be shareable with others, as long as they have access.

You can share links to any view, including Page or Page Resoures search, or Replay view.

ReplayWeb.page encodes the web archive source and view parameters in the URL query and hash string.

Simply copy the entire location url, and you can share with others!

ReplayWeb.page will parse the URL, load the source web archive, then load the view or replay from that archive.

For example, given the following URL:

```
https://replayweb.page/?source=s3://webrecorder-builds/warcs/netpreserve-twitter.warc#view=replay&url=https%3A%2F%2Ftwitter.com%2Fnetpreserve&ts=20190603053135
```

ReplayWeb.page will load the web archive from `s3://webrecorder-builds/warcs/netpreserve-twitter.warc`, switch to 
the replay view via `https://twitter.com/netpreserve` at timestamp `20190603053135`

The following URL will load the same web archive, and show the search results for Pages that contain the word 'WARC':

```
https://replayweb.page/?source=s3://webrecorder-builds/warcs/netpreserve-twitter.warc#view=pages&query=WARC
```

### No Local Files

For obvious reasons, URLs that have a `source=file://...` can not be shared as they refer to a local file on your machine.
Loading that URL by anyone else will result in an error.

{:  .fs-3 .pad .bg-grey-lt-100}
A future goal is to provide an option to share local web archives peer-to-peer via the DAT `hyper://` protocol.


### Sharing Google Drive Archives

An archive loaded from google drive can be shared with others, as long as they have access.

Google Drive Archive will have a `source=googledrive://...`.

Due to restrictions of Google Drive, you will likely be required to authorize with your Google Account to access an archive from Google Drive.

Public files shared from Google Drive can sometimes be loaded without requiring authorization, but this is only supported
for small files.

To share a Google Drive web archive with colleagues and friends:

1. Ensure they you have [loaded the web archive from Google Drive](loading#loading-remote-archives-from-google-drive)

2. Ensure that your friends/colleagues also have the [ReplayWeb.page Google Drive Integration](https://gsuite.google.com/u/2/marketplace/app/replaywebpage/160798412227) installed.

3. Share the file with them via Google Drive. This is the most surefire way to work.

OR.

3. You can share the direct ReplayWeb.page URL directly. This does not always work, and you may need to share the Google Drive link instead.


In this way, web archives can be shared within private networks using existing access control settings in Google Drive.

<hr>
Next: Offline Usage Options


