const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const { pipeline } = require('stream');
const { promisify } = require('util');

const streamPipeline = promisify(pipeline);

const version = "v0.27.0";

async function downloadToFile(url, filename) {
  const res = await fetch(url);
  console.log("Fetching " + url);
  if (!res.ok) throw new Error(`Fetch failed: ${res.statusText}`);
  await streamPipeline(res.body, fs.createWriteStream(filename));
}

async function loadPrebuilt(platform, arch) {
  const url = `https://github.com/murat-dogan/node-datachannel/releases/download/${version}/node-datachannel-${version}-napi-v8-${platform}-${arch}.tar.gz`;
  const filename = path.basename(url);

  await downloadToFile(url, filename);
  execSync(`tar xvfz ${filename}`);

  const target = path.join(__dirname, "node-datachannel-prebuilds", `node-datachannel-${platform}-${arch}.node`);
  execSync(`mv build/Release/node_datachannel.node ${target}`);

  execSync(`rm -r build/Release`);
  execSync(`rm ${filename}`);
}

(async function() {
  switch (os.platform()) {
    case "darwin":
      await loadPrebuilt("darwin", "arm64");
      await loadPrebuilt("darwin", "x64");
      break;

    case "linux":
      await loadPrebuilt("linux", "arm64");
      await loadPrebuilt("linux", "x64");
      break;

    case "win32":
      await loadPrebuilt("win32", "ia32");
      await loadPrebuilt("win32", "x64");
      break;
  }
})();
