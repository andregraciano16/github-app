const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: './public/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name]-[hash].js'
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'public'),
        hot: true
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
                    loader: "style-loader",
                },
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: 'public',
                    },
                },
                {
                    loader: 'css-loader',
                }
            ],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({ path: path.resolve(__dirname, 'public'), filename: '[name]-[hash].css', chunkFilename: '[id].css' }),
        new DashboardPlugin(),
        new HtmlPlugin({
            title: 'GitHub App',
            template: path.join(__dirname, 'public', 'html', 'template.html'),
        }),
    ]
}