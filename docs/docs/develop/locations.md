# Supported Location URLs

ReplayWeb.Page uses URLs to uniquely identify web archives.

In addition HTTP/S, the system supports loading from additional cloud providers and via peer-to-peer decentralized services. The goal is to support loading web archives from any source a web browser can connect to.

The following is a list of currently supported URL schemes and details below:

## HTTP and HTTPS

While `https://replayweb.page` can load archived items from any URL, the hosting server must allow access by [enabling cross origin resource sharing](/develop/cors-settings) (CORS). HTTP URLs may not be accessible from `https://replayweb.page` since it requires HTTPS.

## Local Files

Local files selected via the UI file chooser, and will be given a `file://` URL. Unlike other web archive URLs, file URLs can not be shared with others.

## Amazon S3

The `s3://` URL scheme is provided as a convenience to reference S3 URLs. The URL is converted to an HTTPS URL for access. The S3 Bucket must be public and also provide access to `https://replayweb.page` via CORS. Downloading via S3 credentials is not currently supported.

## Google Drive 

The `googledrive://` URL scheme is used when accessing a web archive shared over Google Drive. It provides a unique identifier provided via Google Drive. When accessing a Google Drive URL, users will be asked to authenticate to be able to access the file.

## IPFS

The `ipfs://` URL scheme is provided as a convenience and resolves to Cloudflare's IPFS Gateway to download archives from IPFS.
