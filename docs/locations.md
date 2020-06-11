---
layout: default
title: 'Supported Locations'
nav_order: 2
description: 'Supported Locations'
parent: Reference
permalink: /docs/locations
---

## Supported Location URLs

ReplayWeb.Page uses URLs to uniquely indentify web archives.

In addition HTTP/S, the system supports loading from additional cloud providers
and via peer-to-peer decentralized services. The goal is to support loading
web archives from any source a web browser can connect to.

The following is a list of currently supported URL schemes and details below:


| Scheme           | Status      |
|:-----------------|:------------|
| `https://`       | <span class="d-inline-block p-2 mr-1 v-align-middle bg-green-000"> Supported   |
| `http://`        | <span class="d-inline-block p-2 mr-1 v-align-middle bg-green-000"> Supported   |
| `file://`        | <span class="d-inline-block p-2 mr-1 v-align-middle bg-green-000"> Supported   |
| `s3://`          | <span class="d-inline-block p-2 mr-1 v-align-middle bg-green-000"> Supported   |
| `googledrive://` | <span class="d-inline-block p-2 mr-1 v-align-middle bg-green-000"> Supported   |
| `ipfs://`        | <span class="d-inline-block p-2 mr-1 v-align-middle bg-purple-000"> Planned    |
| `hyper://`       | <span class="d-inline-block p-2 mr-1 v-align-middle text-grey-lt-000 bg-purple-000"> Planned     |


### HTTP and HTTPS

While `https://replayweb.page` can load from any url, a site must allow access by enabling [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
for the web archive. HTTP URLs may not be accessible from `https://replayweb.page` since it requires HTTPS.

If you need to provide access to web archives stored on your own domain or over HTTP, consider
deploying a copy on your server. See: Running your Own.

### Local Files

Local files selected via the UI file chooser, and will be given a `file://` URL.
Unlike other web archive URLs, file URLs can not be shared with others.


### Amazon S3

The `s3://` url scheme is provided as a convenience to reference S3 URLs. The URL is converted to an HTTPS URL for access.
The S3 Bucket must be public and also provide access to `https://replayweb.page` via CORS.
Downloading via S3 credentials is not currently supported.


### Google Drive 

The `googledrive://` url scheme is used when accessing a web archive shared over google drive. It provides a unique identifier
provided via Google Drive. When accessing a google drive URL, the user will be asked to authenticate to be able to access the file.


### IPFS
{: .d-inline-block }

Help Wanted
{: .label .label-yellow }


The `ipfs://` url scheme is provide as a convenience and resolves to using the Cloudflare IPFS Gateway to download archives from IPFS.
A better implementation with IPFS directly is also possible.


### DAT/Hyper
{: .d-inline-block }

Help Wanted
{: .label .label-yellow }

Support for `hyper://` is planned to allow true peer-to-peer transfer of web archives.

