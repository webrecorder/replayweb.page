# Sharing Archived Items

ReplayWeb.page links are designed to be shareable with others, as long as they have access to the archived item.

ReplayWeb.page encodes the archived item source and current page parameters in the URL query and hash string. Simply copy the entire location URL, and you can share with others!

ReplayWeb.page will parse the URL, load the source archived item, then navigate to the current snapshot or search query.

For example, given the following URL:

```
https://replayweb.page/?source=s3://webrecorder-builds/warcs/netpreserve-twitter.warc#view=replay&url=https%3A%2F%2Ftwitter.com%2Fnetpreserve&ts=20190603053135
```

ReplayWeb.page will load the web archive from `s3://webrecorder-builds/warcs/netpreserve-twitter.warc`, navigate to the correct URL `https://twitter.com/netpreserve` at snapshot `20190603053135`

The following URL will load the same web archive, and show the search results for pages that contain the word 'WARC':

```
https://replayweb.page/?source=s3://webrecorder-builds/warcs/netpreserve-twitter.warc#view=pages&query=WARC
```

## Can't Share Links to Local Files

URLs that have a source URL component of `source=file://...` can not be shared as they refer to a local file on your machine. Loading that URL by anyone else will result in an error.

## Sharing Archived Items with Google Drive

Unlike local files, archived items loaded from Google Drive can be shared with others, as long as they have access!

Files loaded from Google Drive will have a source URL component of `source=googledrive://...`.

Due to restrictions of Google Drive, users will likely be required to authorize with their Google Account when accessing archived items stored in Google Drive. Public files shared from Google Drive can sometimes be loaded without requiring authorization, but this is only supported for small files.

To share archived items via Google Drive ensure that the person you are sharing the item with also has the [ReplayWeb.page Google Drive Integration](https://gsuite.google.com/u/2/marketplace/app/replaywebpage/160798412227) installed (see [add-on installation](../loading/#add-on-installation) for details).

Once they have installed the add-on, share the archived item with them like any other file on Google Drive and have them open it with ReplayWebpage using the [Google Drive loading usage guide](../loading/#usage).
