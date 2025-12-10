module.exports = function (api) {
  api.cache(true);
  let plugins = [];

  plugins.push('react-native-worklets/plugin');
  plugins.push([
    '@tamagui/babel-plugin',
    {
      config: './tamagui.config.ts',
      components: ['tamagui'],
      disableExtraction: process.env.NODE_ENV === 'development',
    },
  ]);

  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],

    plugins,
  };
};
