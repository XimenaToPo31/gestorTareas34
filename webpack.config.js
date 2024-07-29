const path = require('path');

module.exports = {
    entry: '.src/index.js', // Punto de entrada de la aplicacion
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex para identificar archivos CSS
                use: ['style/loader', 'css/loader'], // Loaders para procesar archivos CSS
            },
            {
                test: /\.js$, // Regex para identificar archivos JS
                exclude: /node-modules/, //Excluir la carpeta node/modules
                use:{
                    loader: 'babel-loader', //loader para pasar
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            },
        ],
    },
    devtool: 'source-nap', //Generar source maps para facilitar
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // Carpeta
        compress: true, // Habilitar la comprension gzip
        port: 9000, // Puerto del servidor del desarrollo
}