const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  webpack: function(config) {
    if (process.env.DROP_INTERNAL_THEME === 'true') {
      config.module.rules.push({
        test: path.resolve(__dirname, 'node_modules/baseui/esm/themes/light-theme/light-theme.js'),
        use: 'null-loader'
      });
    }

    config.externals = config.externals || {}
    config.externals['styletron-server'] = 'styletron-server'
    return config
  },
})
