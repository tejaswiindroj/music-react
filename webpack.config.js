var path = require('path');
var webpack = require('webpack');
var vendors = require('./package.json').dependencies;

module.exports = {
    devtool: 'eval',
    entry: {
        app: [
            './src/index'
        ],
        vendor: ['react-hot-loader/patch', 'webpack-hot-middleware/client', ...Object.keys(vendors)]
    },
    externals: {
        'jquery': '$'
    },
    output: {
        path: path.join(__dirname, '../music-laravel/public/js'),
        filename: 'bundle.js',
        publicPath: 'http://127.0.0.1:3000/js/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }]
    },
    devServer: {
        proxy: {
            '**': {
                target: 'http://127.0.0.1:8000',
            }
        }
    }
};
