const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключили плагин

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
    {
                test: /\.css$/,
                use:  [MiniCssExtractPlugin.loader, 'css-loader']
             }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: './src/pages/index.css'}),
        new HtmlWebpackPlugin({ // настроили плагин
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};