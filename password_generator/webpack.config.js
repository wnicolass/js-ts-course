const path = require("path");

module.exports = {
  mode: "development", //mode development: o arquivo é gerado mais rápido, não é minificado
  entry: "./src/index.js", //path do arquivo de entrada
  output: {
    path: path.resolve(__dirname, "public", "assets", "js"), //dirname se refere a pasta onde este arquivo está localizado / path da pasta dos meus arquivos publicos
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/, //define qual pasta não queremos que o webpack analise
        test: /\.js$/, //essa regex indica que o arquivo de test termina com .js
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "source-map", //mostra onde ocorre o erro
};
