## CHANGES

v1.6.0
- Embeds: Support embedding without using webworker with 'noWebWorker' attrib added to `<replay-web-page>`
- Fidelity: improved replay of pages that use eval() in global scope (via wabac.js)
- Fidelity: improved replay of twitter videos archived via browsertrix-crawler/pywb (via wabac.js)
- Loading: Support for multi-WACZ json, with search across all WACZ files (via wabac.js)
- Loading: Support for loading from non-HTTP URLs (via wabac.js) in browsers that support custom fetch
- UI: Support for entering `ssb://<hash>` URLs for use with browsers that support custom fetch
- Dependencies: update to wabac.js 2.12.0, update to electron 19.0.4

v1.5.11
- Loading: fix url lookup when no '=' in query arg, optimize loading compressed index (only load 3 blocks), via (wabac.js)
- Loading: fix url lookup api calls
- Loading: new live proxy support, per-hostname config, combined with wacz loading or main 'proxy:' config
- Loading: fix loading for very large wacz files (via wabac.js)
- Dependencies: update to wabac.js 2.11.1

v1.5.10
- Fidelity: Encoding fix for non-ascii links, optimizations for utf-8 parsing (via wabac.js 2.10.3)
- Dependencies: update to wabac.js 2.10.3

v1.5.9
- Dependencies: update to wabac.js 2.10.2
- Loading: for experimental multi-wacz input, disable periodic reload for now

v1.5.8
- Loading: fix hosted replay via subpath when opening in new tab (#82)
- Loading: fix multi-wacz support in wabac.js
- Dependencies: update to wabac.js 2.10.1

v1.5.7
- Dependencies: update to wabac.js 2.10.0 and wombat 3.3.6
- Dependencies: update to electron 16.0.6 (chromium 96)
- Dependencies: update ruffle to latest nightly (2022-01-08)
- Dependencies: update lit to 2.1.1

v1.5.6
- Fidelity: Fix assignment to local location causing invalid redirect (via wombat 3.3.5)
- Loading: Optimized loading for larger WARCs (via warcio 1.5.0)
- Loading: Show number of WARC records loaded (via wabac.js 2.10.0-beta.0)
- Loading: Use separate web worker for loading, then remove for possible faster loading

v1.5.5
- Fidelity: Only wrap JS globals if necessary (via wabac.js 2.9.5)
- UI: Add download option from collection info and dropdown menu to download web archives from http.
- Dependencies: update to wabac.js 2.9.5
- Dependencies: update to electron 15.3.0 (chromium 94)
- Dependencies: update ruffle to latest nightly (2021-10-25)

v1.5.4
- Fidelity: Faster rewriting of large JS files
- Fidelity: Fixes for twitter video replay
- Loading: Fix IPFS loading of WARCs
- Fidelity: fix replay of .php files being treated as static files (via wabac.js 2.9.4)
- Fidelity: Fix wombat.js build to avoid adding 'esModule' to window (via wabac.js 2.9.4)
- Dependencies: update to wabac.js 2.9.4

v1.5.3
- Fidelity: fix for some eval replay (via wombat), include http->https check for wacz sources
- Dependencies: update to webpack 5 build, wabac.js 2.9.2, wombat 3.3.4
- Search: update to latest flexsearch, faster/improved searching

v1.5.2
- App: IPFS: Configure js-ipfs repo directory to be in existing profile directory
- Loading: IPFS: Fix IPFS support for OSX M1 builds by including leveldown prebuilds
- Dependencies: update to wabac.js 2.9.1, wombat 3.3.3

v1.5.1
- Library usage: Simplfy download options in editable mode, add warc/1.0 download opt (for archiveweb.page)
- Library usage: Allow custom service worker init path on app init (or none)
- Library usage: Ensure page title reflects current app
- UI: Refresh UI after half second while waiting for service worker to load, instead of every 5.

v1.5.0
- Update to wabac.js 2.9.0-beta.1, fidelity and loading improvements, smaller size (includes indexeddb data migration)
- Update to electron 14 (latest beta), Chromium 93
- Update to Universal builds for OS X.
- Add Ruffle, use for Flash loading, both in hosted and electron app versions.
- Embeds: Better error message for when service worker could not be loaded.

v1.4.7
- Loading: HAR file loading: Add messages when HAR file content is missing, don't filter out empty urls (via wabac.js)
- Loading: Fix "null" added on Not Found error page when there is no hashtag.
- Fidelity: Disable post-to-GET conversion (no longer need in latest Chrome!)
- Rewriting: Optimized HTML rewrite for large HTML and disable rewriting if HTML >5MB, improved eval() rewriting, more lenient JSONP matching (via wabac 2.8.0)
- Fidelity: Fix possible skipping of URLs from WACZ that contain'www.' in the middle of URL due to incorrect surt canonicalization (wabac.js 2.8.0)
- Dependencies: bump to wabac.js 2.8.0, wombat to 3.3.1

v1.4.6
- Fidelity: Better WS override that avoids network connection attempts, fixes to pixel ratio override (via wombat.js)
- Fidelity: Better SW override, add missing members that caused errors (via wombat.js)
- Fidelity: Better Storage overrides, more compatible with native Storage APIs (via wombat.js)
- Fidelity: disable DASH loading for IG videos (via wombat.js)
- Loading: Include hashtag URL on not found pages (via wabac.js)
- Dependencies: bump to wabac.js 2.7.10, wombat 3.2.2

v1.4.5
- Loading: Fix IPFS loading (fixed in wabac.js 2.7.8)
- Fidelity: Support replaying localStorage/sessionStorage (if available)
- Dependencies: bump to wabac.js 2.7.7, wombat 3.2.0

v1.4.4
- Loading: Fix loading from sources that don't support range requests for HEAD, don't send If-Range header (fixes in wabac.js 2.7.7)
- Loading: Cleanup of any partial data loaded when collection load fails (from wabac.js)
- Fidelity: Improved fidelity of certain sites that use eval() (from wabac.js)
- Dependencies: bump to wabac.js 2.7.8, wombat 3.1.8, Electron 11.4.8

v1.4.3
- Loading: Various fixes to index loading for compessed WACZ index
- Fidelity: Fix edge-case POST-to-get conversion - binary, empty and text/plain POST payloads now handled same way here (via wabac.js/warcio.js) as in other tools (pywb, cdxj-indexer)
- Customization: Support for automated redirect to live page on not found (via embed options)
- UI: Updated page not found message
- UI: Fix location bar refresh not working with hashtag in URL
- Dependencies: bump to wabac.js 2.7.4

v1.4.2
- Loading: Optimized loading WACZ in wabac.js (cache compressed index loading to avoid duplicate loading)
- Loading: General fixes for WACZ loading (better format detection for newer and older versions, surt/non-surt indexes)
- Update to latest wabac.js 2.7.3

v1.4.1
- Replay: Remove 'download' attribute from anchor tags, which doesn't work in Chrome
- Loading: Fix loading of full-text search index from older wacz

v1.4.0
- Embed: add 'noSandbox' option to not add sandbox to embed iframe
- UI: Double-clicking on page entry causes reload.
- UI: Fix location bar enter not always reloading specified URL
- UI: Fix 'Purge and Reload' to reload current page
- UI: Fix initial load not properly waiting for service worker
- UI: Show 'Loading Archives...' on initial load, until first API response succeeds, instead of 'No Archives'
- Fidelity: Improved fuzzy matching for dynamic sites
- Fidelity: Fix for multipart/form-data replay dropping certain query params
- Fidelity: don't remove spaces in css urls
- Fidelity: Better detection of JSON responses served in response to 'Accept: application/json' but with wrong content-type
- Docs: copy package.json to 'data' to allow access to version in UI, use latest fixed version in Collec
- API: Switch from /wabac/ -> /w/ for replay paths, make path configurable
- Extensibility: Make file chooser, collection list more extensible/stylable (for use with archiveweb.page)
- Lint pass on code base
- Dependencies: wabac 2.7.0, bulma 0.9.2, electron 11.4.3

v1.3.15
- Fidelity: fix encoding issues with UTF-8 encoded JS/CSS introduced in 1.3.13 (fixed via wabac 2.6.9)
- Dependencies: wabac 2.6.9

v1.3.14
- Build: Fix incorrectly packaged npm package for 1.3.13, no other changes

v1.3.13
- Fidelity: fix encoding issues with non-UTF-8 encoded pages (wabac 2.6.8)
- Fidelity: Better detection of JSONP, better rewriting of pages that use JSONP (wabac 2.6.7)
- Dependencies: wabac 2.6.8

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
