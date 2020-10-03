## CHANGES

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
