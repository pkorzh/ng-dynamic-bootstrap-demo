var path = require('path')
var webpack = require('webpack')

var BowerWebpackPlugin = require('bower-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	entry: './bootstrapper.js',
	output: {
		filename: 'app.js',
		path: path.join(__dirname, 'target'),
		chunkFilename: '[chunkhash].js'
	},
	resolve: {
		root: path.join(__dirname, 'src')
	},
	plugins: [
		new BowerWebpackPlugin(),
		new HtmlWebpackPlugin(),
		new webpack.ProvidePlugin({
		})
	],
	module: {
		loaders: [
			{
				test: /\.html$/, 
				loader: 'raw-loader'
			}
		]
	}
}