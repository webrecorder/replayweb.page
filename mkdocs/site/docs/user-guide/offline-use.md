# Offline Use

There are two ways of using ReplayWeb.page without continuous internet access.

## Progressive Web App

ReplayWeb.page can be installed as PWA ([Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)) through supported browsers. Instructions for installation vary based on the browser used to install the application.

??? question "What's a Progressive Web App?"
    Progressive Web Apps (PWAs) can be considered cross-platform applications. PWAs are built with the same software used to develop websites, but they also allow developers to access native desktop features to integrate better with desktop operating systems and allow for offline use!

### Safari

After navigating to [https://replayweb.page](https://replayweb.page), open the `File` menu and select `Add to Dock`. This will add the PWA to your dock and in Launchpad.

To uninstall, long press on the app in Launchpad until the icons start to shake, then press the :bootstrap-x: icon.

### Google Chrome & Microsoft Edge

After navigating to [https://replayweb.page](https://replayweb.page), look for the installation icon to the left of the bookmark page star in the URL bar.  Pressing this icon will display a dialog with an option to install the PWA.

To uninstall on Edge, navigate to [edge://apps/details/replayweb.page/](edge://apps/details/replayweb.page/) and press `Uninstall`

To uninstall on Chrome, open the ReplayWeb.page PWA, press the :bootstrap-three-dots-vertical: icon button in the application bar, and select `Uninstall ReplayWeb.page`.

## Standalone Desktop App

ReplayWeb.page is also available as a standalone app!

Navigate to the [latest release of ReplayWeb.page on GitHub](https://github.com/webrecorder/replayweb.page/releases/latest) and download the applicable file for your platform (.dmg for macOS or .exe for Windows).

The standalone app is useful for two reasons:

1. Flash is not supported by default in most browsers. The ReplayWeb.page App will continue to bundle [Ruffle](https://ruffle.rs/), a Flash emulator, to continue to make Flash content accessible within archived web content.

2. If your primary use involves viewing stored locally web archives, the ReplayWeb.page desktop app is a better option, as it provides direct access to the file system. Once loaded, ReplayWeb.page can continue to load web archives from disk without internet access. The desktop app fully replaces [Webrecorder Player](https://github.com/webrecorder/webrecorder-player)

When using [https://replayweb.page](https://replayweb.page), you may be asked to re-open a local file because a website cannot maintain persistent access to your file system.
