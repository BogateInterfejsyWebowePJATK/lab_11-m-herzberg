// ./webpack.config.js

var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }

        ]
    }
};