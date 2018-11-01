const { optimize: { ModuleConcatenationPlugin } } = require('webpack')

module.exports = {
    output: { libraryTarget: 'commonjs2' },
    externals: { 'react': 'react', 'prop-types': 'prop-types' },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env', '@babel/preset-react'],
						plugins: [ '@babel/plugin-proposal-class-properties' ]
					}
				}
            }
        ]
    },
    plugins: [ new ModuleConcatenationPlugin() ]
}