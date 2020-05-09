const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: './public/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [{
            test: /.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            exclude: /node_modules/,
            test: /\.css$/i,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: path.join(__dirname, 'public', 'css'),
                    },
                },
                {
                    loader: 'css-loader'
                },

            ],
        },]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name]-[hash].css', chunkFilename: '[name]-[hash].css' }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlPlugin({
            title: 'GitHub App',
            template: path.join(__dirname, 'public', 'html', 'template.html')
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false,
                },
            })
        ]
    },
}