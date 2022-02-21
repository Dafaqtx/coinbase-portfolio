const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@node_modules": path.resolve(__dirname, "node_modules"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@src": path.resolve(__dirname, "src/"),
    };

    return config;
  },
};
