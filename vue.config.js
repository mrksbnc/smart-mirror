module.exports = {
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/background/main.js',
      rendererProcessFile: 'src/main.js',
    },
  },
};
