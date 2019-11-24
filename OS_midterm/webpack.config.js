var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const ENTRY = path.join(__dirname, 'src')
const OUTPUT = path.join(__dirname, 'dist')

module.exports = {
    mode: 'development',
    entry: path.join(ENTRY, 'index.jsx'),
    devtool: 'source-map',
    output: {
        path: OUTPUT,
        filename: 'index.bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [ENTRY, 'node_modules']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(ENTRY, 'index.html'),
            path: OUTPUT,
            filename: 'index.bundle.html'
        }),
    ],
    devServer: {
        port: 8081,
        open: true,
        proxy: 'http://localhost:3000'
    },
    module: {
        rules: [{
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
};