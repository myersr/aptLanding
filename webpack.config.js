const webpack = require('webpack');

module.exports = {
    entry: './myapp.js',

    output: {
        filename: 'bundle.js',
        publicPath: ''
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-1' }
        ]
    }
}
