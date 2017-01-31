const webpack = require('webpack');
var path = require('path')

module.exports = {
    entry: './myapp.js',

    output: {
        filename: 'bundle.js',
        publicPath: ''
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-1'
            }
        ]
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            modules: 'modules',
            componentsUI: 'modules/componentsUI',
            default: 'modules/default',
            dashboard: 'modules/dashboard',
            utils: 'modules/utils.js'
        }

    }
}
