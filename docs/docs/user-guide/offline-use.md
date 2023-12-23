# Offline Use

There are two ways of using ReplayWeb.page without continuous internet access.

## Browser Cache

After ReplayWeb.page is loaded in a browser, it can automatically be used offline without requiring an Internet connection as long as the page is left open. If internet access drops out, all web archives already loaded will continue to be available because the page is cached.

To do this, simply load [https://replayweb.page/](https://replayweb.page) and keep the page open.


??? Question "What's cache?"
    Cache is a temporary storage space in your browser that retains certain files. Cached data is used to quickly load an application or website (like replayweb.page!) without fetching the locally retained data from the server.


<!-- ## ReplayWeb.page as Progress Web App

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
-->



## Standalone Desktop App

ReplayWeb.page is also available as a standalone app!

Navigate to the [latest release of ReplayWeb.page on GitHub](https://github.com/webrecorder/replayweb.page/releases/latest) and download the applicable file for your platform (.dmg for macOS or .exe for Windows).

The standalone App is useful for two primary reasons:

1. Flash is not supported by default in most browsers. The ReplayWeb.page App will continue to bundle [Ruffle](https://ruffle.rs/), a Flash emulator, to continue to make Flash content accessible within archived web content.

2. If your primary use is to view web archives stored locally,the ReplayWeb.page desktop app is a better option, as it provides direct access to the file system. Once loaded, ReplayWeb.page can continue to load web archives from disk without internet access. The desktop app fully replaces [Webrecorder Player](https://github.com/webrecorder/webrecorder-player)

When using [https://replayweb.page](https://replayweb.page), you may be asked to re-open a local file because a website cannot maintain persistent access to your file system.
