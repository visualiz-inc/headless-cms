const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

console.log("config webpack")

module.exports = {
    mode: "production",
    entry: './src/frontend.tsx',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'index.build.js',
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "react": path.resolve('./node_modules/react'),
            "react-dom": path.resolve('./node_modules/react-dom')
        }
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.tsx?$/],
                use: ["babel-loader"],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     use: [
            //         "file-loader",
            //         "image-webpack-loader",
            //     ],
            // },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html.ejs", publicPath: "/" })],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};