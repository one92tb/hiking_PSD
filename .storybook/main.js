const custom = require('./webpack.config.js');

module.exports = {
	stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls'
  ],
  webpackFinal: (config) => {
    //console.log(config.module);
    return {
      ...config,
      module: {
        ...config.module,
      },
      resolve: {
        ...config.resolve,
        ...custom.resolve,
      }
    };
  },
};