module.exports = {
    entry: {
        javascript : "./app.jsx",
        html: "./index.html"
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css', exclude: /node_modules/ },
            { test: /\.js$/, loaders: ['react-hot'], exclude: /node_modules/ },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    }
};