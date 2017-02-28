var path = require('path');
var webpack = require('webpack');
var vendors = require('./package.json').dependencies;

module.exports = {
    entry: {
        app: [
            './src/index'
        ],
        vendor: Object.keys(vendors)
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
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }]
    }
};
