var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var webpack = require('webpack');

new WebPackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback : true
}).listen(8080, 'localhost');