const webpack = require("webpack");
const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => ({
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist",
        publicPath: "/",
        hot: true
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    mode:
        process.env.NODE_ENV === "production"
            ? "production"
            : process.env.NODE_ENV === "analyze"
            ? "production"
            : "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader"
            },
            { test: /\.txt$/, use: "raw-loader" },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                            hmr: process.env.NODE_ENV === "development"
                        }
                    },
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: "./static/index.html" }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        process.env.NODE_ENV === "analyze" ? new BundleAnalyzerPlugin() : a => a
    ]
});
