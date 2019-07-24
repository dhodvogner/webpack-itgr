const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  mode: "development",
  entry: "./js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "."),
      outName: "webpack-itgr"
    })
  ]
};
