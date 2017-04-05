module.exports = {
    entry : __dirname + '/app',
    output : {
        path : __dirname + '/build',
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query : {
                    presets : ["es2015"]
                }
            }
        ]
    },
    devServer : {
        port : 3001,
        contentBase : __dirname + '/build',
        inline : true
    }
}