---
layout: page
title: Troubleshooting
nav_order: 4
description: Troubleshooting ReplayWeb.page
permalink: /docs/troubleshooting

---

This section will be dedicated to common errors and issues that we’ve encountered during web archiving.

### WARC file is too big / too slow / fails to load.
#### Loading Large Files: Full vs On-Demand Loading

Due to the nature of the WARC format, the entire file must be read on first use to generate an index.

For WARC files **>25MB**, only the index is initially stored in the browser, and the actual content is loaded 'on-demand',
when the content is first accessed. This leads to faster loading and saves memory when dealing with large archives, but the entire
file must still be read.

[Web Archive Collection (WACZ)](wacz-format) are always loaded on-demand, as no indexing is required.
The initial archive view should load almost instantly as a result.

We recommend converting larger WARC files to WACZ files.

This is currently possible by using the `wacz` python library, see [py-wacz documentation](https://github.com/webrecorder/py-wacz)
for more info.

While we've recently made improvements to large WARC loading, for very large files, this may still take some time and occasionally the browser may not load the full file.

If an archive could not be loaded, an error will be displayed instead of the progress.
Please report any issues encountered via [GitHub Issues](https://github.com/webrecorder/replayweb.page/issues)

## Have another error or issue?
Since we just launched, we’ll need your help with what we should troubleshoot! Please contact us and ask us questions and show us examples.
