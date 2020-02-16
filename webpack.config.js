const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		library: 'use-match-media',
		libraryTarget: 'commonjs2'
	},
	externals: {
		react: 'react'
	}
};
