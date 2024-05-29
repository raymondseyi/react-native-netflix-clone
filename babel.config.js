module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo']
  };
};

// api.cache(false)
// module.exports = {
//   plugins: [
//     ['module:react-native-dotenv']
//   ]
// };

// api.cache(false)
// module.exports = {
//   plugins: [
//     [
//       'module:react-native-dotenv',
//       {
//         envName: 'APP_ENV',
//         moduleName: '@env',
//         path: '.env',
//       },
//     ],
//   ],
// };