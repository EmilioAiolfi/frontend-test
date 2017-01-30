import path from 'path';

const CSS_CHUNK_NAMING = '[name]__[local]___[hash:base64:5]';
const STYLE_LOADERS = [
  'css?modules&importLoaders=1&localIdentName=' + CSS_CHUNK_NAMING,
  'postcss-loader',
  'sass?&sourceMap',
];

const config = {
  PORT: 3000,
  ENV: process.env.NODE_ENV || 'development',
  VIEW: {
    VIEW_PATH: path.join(__dirname, '/../views/'),
    ENCODING: 'utf8',
    EXTENSION: 'dust'
  },
  WEBPACK: {
    STYLE_LOADERS: STYLE_LOADERS,
    PATHS: {
      ENTRY_APP: path.resolve(__dirname, '../client', 'app-client.js')
    }
  }
};

export default (config);
