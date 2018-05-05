const path = require('path');
export default {
  "disableCSSModules":true,
  "env": {
    "development": {
      "devtool": "source-map",
      "extraBabelPlugins": ["dva-hmr"]
    }
  },
  "extraBabelPlugins": [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "~": "./src/components",
      }
    }]
  ],
}
