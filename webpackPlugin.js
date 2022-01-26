const nodepolyfillPlugin = new (require("node-polyfill-webpack-plugin"));
const { NormalModuleReplacementPlugin } = require('webpack');

const cardanoPlugin = new NormalModuleReplacementPlugin(
    /@emurgo\/cardano-serialization-lib-nodejs/,
    '@emurgo/cardano-serialization-lib-browser'
);

// eslint-disable-next-line
module.exports = function (context, options) {
    return {
        name: 'custom-docusaurus-plugin',
        // eslint-disable-next-line
        configureWebpack(config, isServer, utils) {
            return {
                plugins: [nodepolyfillPlugin, cardanoPlugin],
                resolve: {
                    fallback: {
                        fs: false,
                        net: false,
                        tls: false,
                    },
                },
                experiments: {
                    syncWebAssembly: true
                }
            };
        },
    };
};