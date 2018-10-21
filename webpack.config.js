const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = (env, { mode }) => {
	const config = {
		output: { libraryTarget: 'commonjs2' },
		externals: {
			'react': 'react',
			'react-dom': 'react-dom'
		},
		module: {
			rules: [
				{
					test: /\.js$/, 
					exclude: /node_modules/, 
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/preset-react'
							],
							plugins: [
								'@babel/transform-runtime',
								'@babel/plugin-proposal-class-properties'
							]
						}
					}
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'raw-loader']
				}
			]
		},
		plugins: [ new HtmlWebpackPlugin({ template: './src/index.html' }) ]
	}
	if (mode === 'development') {
		config.devtool = 'cheap-module-eval-source-map'
	}
	if (mode === 'production') {
		config.devtool = 'cheap-module-source-map'
		config.plugins.push( new webpack.optimize.ModuleConcatenationPlugin() )
	}
	return config
}
