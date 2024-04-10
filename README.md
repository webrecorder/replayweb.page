<h1>
    <div align="center">
        <img alt="ReplayWebpage" src="src/assets/brand/replaywebpage-lockup-color-dynamic.svg" width="90%">
    </div>
</h1>

[Embedded Viewer](https://replayweb.page/docs/embedding/) Usage Stats: [![](https://data.jsdelivr.com/v1/package/npm/replaywebpage/badge)](https://www.jsdelivr.com/package/npm/replaywebpage)

ReplayWeb.page provides a full web archive viewer that runs directly in the browser,
available at: [https://replayweb.page/](https://replayweb.page)

For full user docs, see: [https://replayweb.page/docs](https://replayweb.page/docs).

The ReplayWeb.page App can be downloaded from the [Releases](https://replayweb.page/releases) page.

See [CHANGES.md](CHANGES.md) for the current changes, or the release notes on the link above.

### Embedding Guide

See the [Embedding Guide](https://replayweb.page/docs/embedding/) for more info on embedding web archives in other sites.

## What's in this repo

ReplayWeb.page provides a static site generated with MkDocs, an npm package/library, and an Electron app all in this repo.

This repository contains the 'frontend' UI for the replay system, while the 'backend' is provided via a service worker
implementation found at: https://github.com/webrecorder/wabac.js. (Of course, both frontend and backend actually run in the browser).

The frontend is loaded from `ui.js`, while the backend service/web worker is loaded from `sw.js`.

This repository contains:

- The core site hosted on https://replayweb.page/ via GitHub Pages
- The docs for https://replayweb.page/docs created with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- The package for npm module: https://www.npmjs.com/package/replaywebpage
- A build system for https://replayweb.page and ReplayWeb.page App.
- App releases at: https://github.com/webrecorder/replayweb.page/releases

## Running ReplayWeb.page

To run ReplayWeb.page and view web archives, a regular HTTP server is all that is needed.

ReplayWeb.page can run with any HTTP server locally. For example, you can run `http-server -p 9990` or `python -m http.server 9990` to run a static web server in the directory of this repository after running `yarn run build`. Then, load `http://localhost:9990/` and you'll have the core replayweb.page running locally.

## Developing ReplayWeb.page

ReplayWeb.page is built as a Node package can be installed using yarn: `yarn install`

The package provides various commands that can be used with yarn/npm. Some useful commands include:

- `yarn start-dev` - to run in dev mode with Webpack dev server on port 9990. Autobuilds dev assets.

- `yarn start-docs` - to build assets in dev mode, and start docs in dev mode. Autobuilds /docs assets.

- `yarn start-prod` - to run production site on port 9990, with previously built assets (without docs)

- `yarn start-prod-docs` - to build production version of the site and build docs with `/docs` endpoint available.

- `yarn start-electron` - to start electron in dev mode, with previously built assets

- `yarn build` - to build production assets sw.js, ui.js

- `yarn build-docs` - to build the docs site in `mkdocs/site` to `mkdocs/_genhtml`

- `yarn dist` - to build production assets + Electron app (in dist/)

### Static Site

The static assets are placed in the root `index.html`, `sw.js`, and `ui.js`, and can be used with any HTTP server. This provides the core ReplayWeb.page functionality.

### Static Site + Docs

The full site with docs is built using MkDocs. Using the `yarn build-docs` command, the static assets are copied into `mkdocs/site/` and using Markdown in `mkdocs/site/docs`, the final static site is built to `mkdocs/_genhtml`. This is what is published to https://replayweb.page/ via CI.


### Service Worker Requirements

Note that for the 'backend' service worker to work, the static site must be served from either localhost or an HTTPS endpoint.
This is browser security requirement and not much can be done to get around that.

See the [user docs](https://replayweb.page/docs/) for additional info about using ReplayWeb.page

## LICENSE

ReplayWeb.page is made available under the AGPLv3 License.

If you would like to use it under a different license or have a question, please reach out as that may be a possibility.

## Contributing and Bug Reports

Contributions are definitely welcome!

As this is still a new project and rapidly evolving, please open an issue first before submitting a pull request.
