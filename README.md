<p align="center"><img src="/assets/logo.svg" width="128" height="128"></p>
 
# ReplayWeb.page

## Serverless Web Archive Replay
[Embedded Viewer](https://replayweb.page/docs/embedding) Usage: [![](https://data.jsdelivr.com/v1/package/npm/replaywebpage/badge)](https://www.jsdelivr.com/package/npm/replaywebpage)

ReplayWeb.page provides a full web archive replay system running directly in the browser, 
available at: [https://replayweb.page/](https://replayweb.page)

For full user docs, see: [https://replayweb.page/docs](https://replayweb.page/docs).

See [CHANGES.md](CHANGES.md) for changes in the latest release.

The ReplayWeb.page App can be downloaded from the [Releases](https://replayweb.page/releases) page.

### Embedding Guide

See the [Embedding Guide](https://replayweb.page/docs/embedding) for more info on embedding web archives in other sites.


## What's in this repo

ReplayWeb.page is a static web site / offline web app + Electron app.

This repository contains the frontend UI for the replay system, while the backend is provided via a service worker
implementation found at: https://github.com/webrecorder/wabac.js

The frontend is loaded from `ui.js`, while the backend service/web worker is loaded from `sw.js`.

This repository contains:
- The built assets for the site hosted at https://replayweb.page/ via GitHub Pages
- The package for npm module: https://www.npmjs.com/package/replaywebpage
- A build system for https://replayweb.page and ReplayWeb.page App.
- Docs hosted at: https://replayweb.page/docs
- App releases at: https://github.com/webrecorder/replayweb.page/releases

## Running ReplayWeb.page

To run ReplayWeb.page and view web archives, a regular HTTP server is all that is needed.

ReplayWeb.page can run with any HTTP server locally. For example, you can run `http-server -p 9990` or `python -m http.server 9990` to run a static web server in the directory of this repository. Then, simply load `http://localhost:9990/` and you'll have replayweb.page running locally.


## Developing ReplayWeb.page

ReplayWeb.page is built as a Node package can be installed using yarn:

`yarn install`

The package provides various commands that can be used with yarn:

- `yarn run start-dev` - to run in dev mode with Webpack dev server on port 9990. Autobuilds dev assets.

- `yarn run build` - to build production assets sw.js, ui.js

- `yarn run start-prod` - to run production site on port 9990, with previously built assets

- `yarn run start-electron` - to start electron in dev mode, with previously built assets

- `yarn run dist` - to build production assets + Electron app (in dist/)


The static assets are placed in the root `index.html`, `sw.js` and `ui.js`, and can be used with any HTTP server.

For service workers to work, they must be served from either localhost or an HTTPS endpoint.

See the [user docs](https://replayweb.page/docs/) for additional info about using ReplayWeb.page



## LICENSE

ReplayWeb.page is made available under the AGPLv3 License.

If you would like to use it under a different license or have a question, please reach out as that may be a possibility.


## Contributing and Bug Reports

Contributions are definitely welcome!

As this is still a new project and rapidly evolving, please open an issue first before submitting a pull request.
