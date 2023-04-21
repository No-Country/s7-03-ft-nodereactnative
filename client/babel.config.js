// eslint-disable-next-line no-undef
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
            ['react-native-reanimated/plugin'],
            [
                'module:react-native-dotenv',
                {
                    envName: 'APP_ENV',
                    moduleName: '@env',
                    path: '.env',
                },
            ],
            [
      "@babel/plugin-proposal-export-namespace-from"    
            ]
        ],
    };
};
