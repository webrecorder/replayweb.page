const { notarize } = require('electron-notarize');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;  
  if (electronPlatformName !== 'darwin') {
    return;
  }

  const appName = context.packager.appInfo.productFilename;

  const password = `@keychain:WR Notarize`;

  return await notarize({
    appBundleId: 'net.webrecorder.replayweb.page',
    appPath: `${appOutDir}/${appName}.app`,
    appleId: 'ikreymer@gmail.com',
    appleIdPassword: password,
  });
};


