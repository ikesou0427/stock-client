import * as path from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';

const entry = path.resolve(__dirname, 'src', 'index.tsx');

const config: webpack.Configuration = {
  mode: isProduction ? 'production' : 'development',
  entry,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '株マネ',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
};

if (!isProduction) {
  config.entry = ['webpack-hot-middleware/client', entry];
  config.plugins?.push(new webpack.HotModuleReplacementPlugin());
}

export default config;