// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'js/app': ['./src/main/ferdy/app.jsx'],
    },
    resolve: {
        alias: {
            '@'      : resolve('src/main/ferdy'),
            '@style' : resolve('src/main/ferdy/style'),
            '@util'  : resolve('src/main/ferdy/util'),
            '@compo' : resolve('src/main/ferdy/component'),
            '@image' : resolve('src/main/ferdy/asset/image'),
            '@icon'  : resolve('src/main/ferdy/asset/icon'),
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',
    },
    module: {
        rules: [
            { // js, jsx files
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            { // scss files
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            { // image files
                test: /\.(png|jpg|gif)$/i,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 8192
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/main/ferdy/index.html',
            filename: 'index.html',
        }),
    ],
};


// Function local : Resolve project path
function resolve(route) {
    return path.resolve(__dirname, route);
}