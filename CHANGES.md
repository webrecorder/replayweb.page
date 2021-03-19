## CHANGES

v1.3.12
- Loading: Fix bug with pages from WACZ files showing loading time, instead of actual timestamp.
- Loading: WACZ loading works efficiently even when HEAD method is not supported.
- Embeds: Resolve embed source to current page instead of to replayBase
- Documentation: Updated Documentation with new images, troubleshooting and updated embed guide with reference and CORS help.
- Dependencies: wabac 2.6.6

v1.3.11
- Loading: Fix regression in indexing of WARCs, including ignoring metadata records that were accidentally being indexed.
- Loading: Add periodic ping when loading to avoid serviceworker shutdown in Firefox.
- UI: On load failure, only add 'try again' option when reasonable.
- Dependencies: wabac 2.6.5

v1.3.10
- Loading: Improved loading of video, especially on Safari, cache range requests via loading
- Loading: Improved loading stability from service worker waiting for loading event to finish!
- UI: Allow retry on loading errors even in non-embed mode.
- Fidelity: Fixed replay of pages with Javascript modules.
- Fidelity: Replay non-HTTP only cookies set via 'Set-Cookie' header, improving fidelity for sites that require cookies set this way.
- Embed: Fix embed path to look for service worker in local ./replay/ directory by default, instead of root /replay/
- Dependencies: wabac.js 2.6.4, wombat 3.1.2, warcio 1.4.2, Electron 11.3.0

v1.3.9
- Fidelity: Upgrade to wabac.js 2.6.1, wombat 3.1.1: improved POST request rewriting for multipart/form-data, Tableau dashboard fidelity
- UI: editable mode: style fix on page delete spinner, don't show editing options on sidebar

v1.3.8
- UI: Native files: Support asking permission when doing a full reload of a local file.
- Library: Add WrModal UI element to simplify modal creation.
- Library: UI: Add confirmation for page-deletion and multi page deletion when in editing mode (currently only used in ArchiveWeb.page)
- Fidelity: Fixes for youtube and vimeo replay fidelity
- Dependencies: Update to wabac.js 2.5.6, wombat 3.0.4

v1.3.7
- Library: Add missing index.js to support loading 'replaywebpage' package

v1.3.6
- Switch back to Electron 11.2.0 / Chrome 87 to keep support for Flash plugin

v1.3.5
- Dependency update: Latest wabac.js / warcio / wombat
- Electron App: Update to Chrome 88, fix for PDF rendering

v1.3.4
- Loading: Fix loading local files in App
- Fidelity: Latest wabac.js
- Autoupdate: Add initial support for auto-updating

v1.3.3
- UI: Component customization improvements, update to latest wabac.js
- Loading: Improvements for IPFS loading, fix loading with hashtag #filename= in Electron app

v1.3.2
- UI: Show navbar on all pages, include breadcrumbs with collection title current page
- UI: Condense frontpage UI slightly

v1.3.1
- Loading: Support updated WACZ Format (1.0.0) with latest wabac.js update
- Loading: Archives loaded with via native file system can be reloaded after purge cache (chrome only)

v1.3.0
- UI: Condense navbar and location bar: add logo to location bar, condense button spacing, add about link to context menu
- UI: Add collection info dropdown to be a separate tab instead
- UI: Convert Terms into general About dialog
- Loading: IPFS support! Load from `ipfs://` URLs, eg. `ipfs://hash/filename.wacz. Possible to specify extension for root with: `ipfs://hash#filename=.wacz`
- App: Electron App uses IPFS in node, proxies through file proxy.
- Loading: Native File System (Chrome-only) support: Loading local files on Chrome uses FileHandle, which allows persistent reuse of files with permission
- Loading: Optimize local file loading on all browsers: No more separate webworker, serviceworker caches entire blob into memory. Should fix Firefox loading issues streaming from blob.
- Loading/UI: Revamp permissions UI to replace iframe instead of popup
- UI: Favicon smoother update, better check for valid icon
- UI: Purge Cache / Full Reload reloads current frame, not parent

v1.2.1
- Loading/UI: Fix Google Drive Loading/Reauthorization: Only trigger when reauth is needed. For rate-limit errors, attempt reloading more slowly (exponential backoff)
- Loading: ReplayWeb.page App supports opening WACZ, WARC and HAR files via double-clicking from OS and via command-line.

v1.2.0
- UI: Location bar fixes: Enter reloads same URL, Escape restores current URL, properly updated on navigation, Favicon displayed in location bar if available
- UI: URL search defaults to all URL query, not HTML only query
- Fidelity: Rewriting system overhaul, improved youtube rules, fuzzy matching improvements (using Levenshtein distance for query args)
- Backend: Support for WARC record proxy, including kiwix/zim style separate headers and payload requests: headers loaded from `<prefix>/H/<url>`, payload from `<prefix>/A/<url>`


v1.1.2
- UI: Fix auto-loading of additional results on url search page when searching by mime type.
- Fidelity: More fixes to replay of embedded "about:blank", fix replay of embedded tweets in particular.
- Fidelity: Various improvements to fuzzy matching (longer params weighed higher, numeric params weighed by difference, support for required params)


v1.1.1

- UI: Sort column is now remembered (for page lists, url resources and main collection lists)
- UI: Highlighting enabled on URL search tab and 'contains' search fixed.
- Fidelity: Improved replay for images from Wix sites
- Fidelity: Fixed rewriting of web workers
- Fidelity: Fixed rewriting of embedded "about:blank" iframes, which may not have replayed correctly.


v1.1.0

- Improved UI for embedding, allow viewing all search (story/pages/url) tabs
- Sidebar support with all tabs available
- Replay improvements, including better Safari support for video.
- Embed options: `embed="default"` for full replay, `embed="replayonly"` for no location bar UI
- a11y improvements for all UI elements (courtesy of @rebeccacremona)
