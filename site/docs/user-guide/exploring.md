# Exploring Archived Content

The ReplayWeb.page homepage lists an index of all your loaded archived items. Items are searchable by their title or source, and can be filtered by the date they were loaded or their title.

## Navigation

ReplayWeb.page's sidebar is the fastest way of finding content within an archived item. It features several tabs that allow information to be accessed:

### Page

The pages view lists all the webpages stored within the archived item.

#### Searching For Pages

Pages can be searched for by their title, URLs, or extracted text if available.

ReplayWeb.page will load pre-generated full-text search data when loading WACZ files, and will also attempt to generate full-text index from HTML files contained in WARC files upon loading a WARC.

### Resources

The resources view displays all the content within a loaded archived item, listed by URL and media type. For many archived items with no page or curatorial metadata available, this is the best way to explore the archived contents.

This view is available for all archives that only store raw data.

#### Searching For Resources

Page resources can only be searched by URL. Searches can be performed by exact URL, by URL prefix, or by searching for any string contained in the URL.

The _URL Prefix_ option is best for searching large archives that require on-demand loading. The _Contains_ option will not find any URLs that have not yet been loaded.

### Story

The story view presents lists of curated pages and a description of their significance, as specified by the creator of the web archive. This option is only shown if there is a curated story. As curated lists are not a standardized part of the WARC format, only WARCs exported from [Conifer](https://conifer.rhizome.org/) can be configured to use this option.
