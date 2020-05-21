const { notarize } = require('electron-notarize');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;  
  if (electronPlatformName !== 'darwin') {
    return;
  }

  if (process.env.CSC_IDENTITY_AUTO_DISCOVERY === "false") {
    console.log('Skipped signing and notarizing');
    return;
  }

  console.log('Notarizing...');

  const appName = context.packager.appInfo.productFilename;

  const password = `@keychain:WR Notarize`;

  return await notarize({
    appBundleId: 'net.webrecorder.replayweb.page',
    appPath: `${appOutDir}/${appName}.app`,
    appleId: 'ikreymer@gmail.com',
    appleIdPassword: password,
  });
};


