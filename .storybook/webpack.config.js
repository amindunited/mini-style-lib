const path = require('path');
module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
    ],
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'raw-loader',
      'sass-loader'
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
