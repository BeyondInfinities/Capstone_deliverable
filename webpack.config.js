var path = require("path");
var webpack = require("webpack");
// import plugins for bundle-optimization, asset management & env variables
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	// Where to start building the webpack
	entry: {
		index: "./src/index.js",
	},
	resolve: {
		extensions: [".mjs", ".js", ".html", ".npy", ".npc", ".svg", ".css", ".bib"],
	},
	// Where and what name to output the files
	output: {
		path: __dirname + "/public",
		filename: "[name].bundle.js",
		chunkFilename: "[name].[id].js",
	},
	// specify loader in the format of {test: regex, use: [loader]}
	module: {
		rules: [
			{
				test: /\.(npy|npc)$/,
				exclude: /node_modules/,
				loader: "numpy-loader",
				options: {
				  outputPath: "data/",
				},
			  },
			{
				test: /\.(html|js)$/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"],
				},
			},
			{
				test: /\.css$/i,
				use: ["to-string-loader", "css-loader"],
			},
			{
				test: /\.(html|svelte)$/,
				exclude: /node_modules/,
				loader: "svelte-loader",
			},
			{
				test: /\.(npy|npc)$/,
				exclude: /node_modules/,
				loader: "numpy-loader",
				options: {
					outputPath: "data/",
				},
			},
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				loader: "svg-inline-loader",
				options: {
					removeSVGTagAttrs: true,
					removingTagAttrs: ["font-family"],
				},
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				exclude: /node_modules/,
				loader: "file",
				options: {
					outputPath: "images/",
				},
			},
			{
				test: /\.bib$/i,
				use: 'raw-loader',
			},
		],
	},
	// specify plugins by creating new objects for different uses
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.ejs",
			filename: "index.html",
			chunks: ["index"],
		}),
		new CopyWebpackPlugin([{ from: "static/" }]),
	],
	devServer: {
		historyApiFallback: true,
		overlay: true,
		stats: "minimal",
		contentBase: __dirname + "/public",
	},
	devtool: "inline-source-map",
};
