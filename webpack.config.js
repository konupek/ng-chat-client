module.exports = {
	entry: './src/app.js',
	output: {
		path: `${__dirname}/dist`,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /src.*\.js$/,
				loader: 'ng-annotate'
			},
			{
				test: /src\/lang.*\.json$/,
				loader: 'translate'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.less$/,
				loader: 'style!css!less'
			},
			{
				test: /\.html$/,
				loader: 'html'
			}
		]
	}
};