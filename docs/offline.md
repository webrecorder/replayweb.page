---
layout: default
title: Offline Use
nav_order: 2
parent: Loading Web Archives
permalink: /docs/loading_offline
---

# Offline Use

{: .no_toc }

## ReplayWeb.page is available for offline use in several ways.

{: .no_toc .text-delta }

1.  {:toc}

## ReplayWeb.page Offline Cache

After ReplayWeb.page is loaded, it can automatically be used offline without requiring an Internet connection.

That's to say, once you have loaded ReplayWeb.page online (with an Internet connection), if an Internet connection is not available later on, all web archives already loaded will continue to be available because it's cached.

To do this, https://replayweb.page/ in your Chrome browser, and the site will start loading local archives even without an Internet connection.

<details>
    <summary>
        What's cache?
    </summary>
      <p>
       Cache is a <i>temporary</i> storage space in your browser that keeps certain files. Cached data is used to quickly load an application or website (like replayweb.page!) every time you log on. 
      </p>
  </details>

## ReplayWeb.page as Progress Web App

ReplayWeb.page can also be installed as [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) and be available as a standalone app on desktop and mobile.

These type of apps use the same, current version of Chrome you normally use while searching or browsing the web. This is still experimental, but should provide the same behavior as regular https://replayweb.page/

To do this, on the ReplayWeb.page site, you might have noticed a "new window icon" in your search bar. Clicking on this icon will open the progressive web app on your computer so you can use it offline.

<details>
    <summary>
        What's a Progressive Web App?
    </summary>
      <p>
       Progressive Web Apps can be considered as a cross-platform app: part web and part native. PWAs are built on the web and has web features that make is faster and easier to discover and share. AND it also has native features that makes it better integrated with your operating system and allows you to install on your computer so that it works offline!
      </p>
  </details>

<img alt="screenshot of replayweb.page (offline)" src="/docs/assets/replaywebpage-pwa.png">

## ReplayWeb.page as Standalone Desktop (Electron) App

ReplayWeb.page is also available as a standalone Electron App. In this mode, ReplayWeb.page packages its own version of Chrome.

To do this, go to our [GitHub repo for replayweb.page](https://github.com/webrecorder/replayweb.page) and scroll down to "what's in this repo" for [app releases](https://github.com/webrecorder/replayweb.page/releases). You can download as a .dmg (for Apple) or .exe (for Windows).

Although the Web Page/Progressive Web App versions have almost the same features, the standalone App is useful for two primary reasons:

1. For viewing web archives that contain Flash. Flash is not supported by default in most browsers and will soon be removed. The ReplayWeb.page App will bundle a Flash plugin to continue to make Flash accessible for web archives.

2. Primary use for viewing offline web archive. If your primary use is to view web archives stored locally,
   the ReplayWeb.page App is a better option, as it provides direct access to the file system.
   Once loaded, ReplayWeb.page App can continue to load web archives from disk.
   The desktop app fully replaces [Webrecorder Player](https://github.com/webrecorder/webrecorder-player)

When using [https://replayweb.page](https://replayweb.page), you may be asked to re-open a local file because a web site can not have persistent access to your file system.

<details>
    <summary>
        What's a standalone desktop (Electron) app?
    </summary>
      <p>
       Electron is the framework being used for a native application. A standalone desktop app just means that you can download the application to your desktop and open it up whenever without Internet!
      </p>
  </details>

  <img alt="screenshot of replayweb.page (offline)" src="/docs/assets/replaywebpage-releases.png">

<hr>
Once an archive has successfully loaded, you will be redirected to the archive view from where you can explore the archive.

Next: [Exploring the Archive](/docs/exploring)
