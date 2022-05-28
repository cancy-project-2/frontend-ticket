const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "cancy-project",
    projectName: "ticket",
    webpackConfigEnv,
    argv,
    standaloneOptions: {
      appOrParcelName: "ticket",
      importMapUrl: new URL("https://storage.googleapis.com/cancy-website-bucket/import/map.json"),
    },
  });

  return merge(defaultConfig, {
    externals: [
      "react",
      "react-dom",
      "single-spa", /^@cancy-project\//
    ],
    // modify the webpack config however you'd like to by adding to this object
  });
};
