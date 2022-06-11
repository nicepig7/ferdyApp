// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'js/app': ['./src/main/ferdy/app.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/main/ferdy/index.html',
            filename: 'index.html',
        }),
    ],
};