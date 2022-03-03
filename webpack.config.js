const path = require('path');

module.exports = {

    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
        presets: ['es2015']
    }
};
