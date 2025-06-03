const { execSync } = require("child_process");
const path = require("path");

const version = "v0.27.0";

function loadPrebuilt(platform, arch) {
  const url = `https://github.com/murat-dogan/node-datachannel/releases/download/${version}/node-datachannel-${version}-napi-v8-${platform}-${arch}.tar.gz`;
  const filename = path.basename(url);

  execSync(`wget ${url}`);
  execSync(`tar xvfz ${filename}`);

  const target = path.join(__dirname, "node-datachannel-prebuilds", `node-datachannel-${platform}-${arch}.node`);
  execSync(`mv build/Release/node_datachannel.node ${target}`);

  execSync(`rm -r build/Release`);
  execSync(`rm ${filename}`);
}

loadPrebuilt("darwin", "arm64");
loadPrebuilt("darwin", "x64");
loadPrebuilt("linux", "arm64");
loadPrebuilt("linux", "x64");
loadPrebuilt("win32", "ia32");
loadPrebuilt("win32", "x64");
