const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        open: true,
        port: process.env.PORT || 8080,
        hot: true,
        writeToDisk: true,
    },
});
