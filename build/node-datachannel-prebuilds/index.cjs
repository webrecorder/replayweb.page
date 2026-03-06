const path = require("path");
const os = require("os");

const channel = require(path.join(__dirname, `node-datachannel-${os.platform()}-${os.arch()}.node`));
module.exports = channel;
