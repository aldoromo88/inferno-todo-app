const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

const environmentConfig = require(`../environments/${process.env.ENVIRONMENT}.js`);
if (!environmentConfig) throw 'No environment config!';

const ENTRY = './src/main.js';
const OUTPUT = path.resolve(__dirname, '../deploy/public');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: ENTRY,
	output: {
		path: OUTPUT,
		filename: 'js/[hash].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json'],
		alias: {
			'inferno': process.env.NODE_ENV !== 'production' ? 'inferno/dist/index.dev.esm.js' : undefined,
			'components': path.resolve(__dirname, '../src/components'),
			'store': path.resolve(__dirname, '../src/store'),
			'assets': path.resolve(__dirname, '../src/assets'),
			'scss': path.resolve(__dirname, '../src/scss')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 2000,
							name: 'assets/[name]-[hash].[ext]'
						}
					}
				]
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			hash: false,
			template: './src/index.html',
			filename: 'index.html'
		}),
		new webpack.DefinePlugin({
			'environment': JSON.stringify(environmentConfig)
		})
	]
};
