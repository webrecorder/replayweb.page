---
layout: default
title: Offline Use
nav_order: 4
parent: Usage
permalink: /docs/offline
---

# Offline Use

ReplayWeb.page is available for offline use in several ways.

## ReplayWeb.page Offline Cache

After ReplayWeb.page is loaded, it can automatically be used offline without requiring an internet connection.

If a connection is not available, all web archive already loaded will continue to be available.

[Loading local archives](loading#loading-local-web-archives) should fully work without an internet connection.

## ReplayWeb.page as Progress Web App

ReplayWeb.page can also be installed as [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) and be available as a standalone app on desktop and mobile.

This is still experimental, but should provide the same behavior as regular https://replayweb.page/

## ReplayWeb.page as Standalone Desktop (Electron) App

ReplayWeb.page is also available as a standalone Electron App. In this mode, ReplayWeb.page
ships its own version of Chrome.

Although the Web Page/Progressive Web App versions have almost the same features, the standalone App is useful for two primary reasons:

1) For viewing web archives that contain Flash. Flash is not supported by default in most browsers and will soon be removed. The ReplayWeb.page App will bundle a Flash plugin to continue to make Flash accessible for web archives.

2) Primary use for viewing offline web archive. If your primary use is to view web archives stored locally,
the ReplayWeb.page App is a better option, as it provides direct access to the file system.
Once loaded, ReplayWeb.page App can continue to load web archives from disk.
The desktop app fully replaces [Webrecorder Player](https://github.com/webrecorder/webrecorder-player)

When using [https://replayweb.page](https://replayweb.page), you may be asked to re-open a local file because a web site can not have persistent access to your file system.
