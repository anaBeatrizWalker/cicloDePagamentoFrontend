//Configuração interpretada pelo webpack

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin') //extrai os arquivos css complidados

module.exports = {
    entry: './src/index.jsx', 
    output: {
        path: __dirname + '/public', //diretório atual dentro da pasta public
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public', //pasta do conteudo
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    plugins: [ 
        new webpack.ProvidePlugin({ //deixando o jquery disponivel
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{ //cada loader é para um tipo de arquivo
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file'
        }]
    }
}