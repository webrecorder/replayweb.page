# User Guide

Welcome to the ReplayWeb.page official user guide.

## Getting Started

1. Check out [Loading Archived Items](loading.md) to point ReplayWeb.page towards the file you wish to view.
2. Once your file has been loaded, [learn how to navigate the archived content]()!

## Supported Formats

While ReplayWeb.page aims to support a variety of formats for archived web content, for best performance we recommend using WACZ files. To archive webpages to WACZ files on a per-page basis, we recommend [ArchiveWeb.page](https://archiveweb.page). If you need to archive entire websites, check out [Browsertrix](https://browsertrix.com).

??? question "WARC?  WACZ?  What's the difference?"
    Due to the nature of the WARC format, the entire file must be read on first use to generate an index — a list of all the pages and content available in the file used by ReplayWebpage to rebuild and display the archived content.

    Inversely, WACZ files are always loaded on-demand and no indexing is required. The initial archive view should load very quickly as a result.

    For users comfortable with the command line, we recommend converting WARC files to WACZ files by using the `wacz` python library, see [py-wacz on GitHub](https://github.com/webrecorder/py-wacz) for more information.

ReplayWeb.Page supports the following file formats listed as "Supported". Format type is determined based on the file's extension.

| Format  | Extensions          | Status         |
|:--------|:--------------------|:---------------|
| WACZ    | `.wacz`             |  <span class="status-success">:bootstrap-check-circle: Supported</span>     |
| WARC    | `.warc`, `.warc.gz` |  <span class="status-success">:bootstrap-check-circle: Supported</span>     |
| HAR     | `.har`              |  <span class="status-success">:bootstrap-check-circle: Supported</span>     |
| WBN     | `.wbn`              |  <span class="status-danger">:bootstrap-x-octagon: Not Supported</span>     |
| ARC     | `.arc`              |  <span class="status-danger">:bootstrap-x-octagon: Not Supported</span>     |
| CDX     | `.cdx`, `.cdxj`     |  <span class="status-success">:bootstrap-check-circle: Supported</span>     |
