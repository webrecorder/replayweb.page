---
hide:
    - navigation
    - toc
---

# Home

Welcome to the ReplayWeb.page official docs. These docs contain the following sections:

- [Developer Docs](/develop/embedding) — Information on developing and embedding ReplayWebpage into your projects.
- [User Guide](/user-guide/) — Instructions and reference for using ReplayWebpage to view archived web content.

## What is Replayweb.page?
[ReplayWeb.page](https://replayweb.page) is an open-source, browser-based viewer that loads and renders static web archive files. It functions as a serverless (client side) replay tool that _doesn't_ require a server to coordinate what archived content should be retrieved from a large central repository.

### Key Features

- High-fidelity replay of archived items in several formats.
- Page search and URL search.
- Full text search support for archived items that include extracted text.
- On-demand, incremental loading of large archives.
- Several options for fully-functional offline usage, including a standalone desktop app with Flash support.
- Support for versioned embedding of archived items.

### Demo!

Try scrolling the archived page below!

<script src="https://cdn.jsdelivr.net/npm/replaywebpage/ui.js"></script>

<replay-web-page class="wr-container" style="min-height: 600px; height: 80vh;" replaybase="../../js/" source="https://replayweb.page/examples/netpreserve-twitter.warc" url="https://twitter.com/netpreserve"></replay-web-page>
