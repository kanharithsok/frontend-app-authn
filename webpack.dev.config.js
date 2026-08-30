// frontend-app-authn/webpack.dev.config.js
const { createConfig } = require('@openedx/frontend-build');

const config = createConfig('webpack-dev');

// The responsive layout switch (react-responsive + Paragon's ResizeObserver) emits a
// benign "ResizeObserver loop completed with undelivered notifications" while resizing.
// webpack-dev-server escalates it to a full-screen overlay. Keep the overlay for real
// runtime errors; filter only this one.
config.devServer = {
  ...config.devServer,
  client: {
    ...config.devServer?.client,
    overlay: {
      errors: true,
      warnings: false,
      runtimeErrors: (error) => !/ResizeObserver loop/.test(error?.message ?? ''),
    },
  },
};

module.exports = config;
