const babelConfig = require('./babel.config');
module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'gbifReactComponents',
      externals: {
        react: 'React'
      }
    }
  },
  babel: babelConfig
}
