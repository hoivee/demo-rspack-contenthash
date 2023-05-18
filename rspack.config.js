// @ts-check
/** @type {import('@rspack/cli').Configuration} */
const config = {
  mode: 'production',
  devtool: 'hidden-source-map',
  entry: './src/app.ts',
  output: {
    path: 'dist',
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/chunk.[name].[contenthash:8].js',
    cssFilename: 'static/css/chunk.[name].[contenthash:8].css',
    cssChunkFilename: 'static/css/chunk.[name].[contenthash:8].css',
    assetModuleFilename: 'static/media/[name].[hash][ext][query]'
  },
  target: ['web', 'es5'],
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.mjs'],
  },
  builtins: {
    presetEnv: { targets: ['Chrome >= 48'] },
  },
  module: {
    rules: [
      {
        test: /.s[ac]ss$/,
        use: [
          { loader: 'sass-loader' },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                require.resolve('./src/variables.scss'),
              ]
            }
          }
        ],
        type: 'css'
      },
    ]
  },

  optimization: {
    minimize: false,
    realContentHash: true,
  },
};

module.exports = config;
