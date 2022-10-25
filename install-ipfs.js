/*eslint-env node */

const download = require("go-ipfs/src/download.js");
const fsp = require("fs/promises");
const path = require("path");


function toGoIpfsArch(arch) {
  switch (arch) {
  case "x64":
    return "amd64";
  }

  return arch;
}


async function downloadForArch(platform, arch) {
  const dirName = path.join(__dirname, "..", "dist", "prebuilds", `${platform}-${arch}`);

  const result = await download(null, null, toGoIpfsArch(arch), dirName, true);

  const finalPath = path.join(dirName, path.basename(result));

  await fsp.rename(result, finalPath);

  await fsp.rm(path.join(dirName, "go-ipfs"), {recursive: true});

  console.log(`final path: ${finalPath}`);
} 


(async function() {
  if (process.platform === "darwin") {
    await downloadForArch(process.platform, "arm64");
    await downloadForArch(process.platform, "x64");
  } else {
    await downloadForArch(process.platform, process.arch);
  }

})();


