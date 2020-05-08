const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './public/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name]-[hash].js'
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
            use: [{
                loader: "style-loader"
            },
            {
                loader: "raw-loader"
            }],
        },]
    },
    plugins: [
        new HtmlPlugin({
            title: 'GitHub App',
            template: path.join(__dirname, 'public', 'html', 'template.html')
        })
    ]
}