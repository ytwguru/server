var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");

module.exports = [
  {
    entry : {
      main : ["webpack-dev-server/client?http://localhost:8080", "webpack/hot/only-dev-server", "./entry.js"]
    },
    output : {
      path : __dirname + "/dist",
      publicPath : "/",
      filename : "[name].bundle.js"
    },
    module : {
      loaders : [
        { test : /\.css$/, loader : "style!css"},
        { test : /\.less$/, loader: "style!css!less"},
        { test : /\.jsx?$/, exclude : /(node_modules)/, loader : "react-hot!babel"},
        { test: /\.modernizrrc$/, loader: "modernizr" },
        { test: /jquery/, loader: 'expose?$!expose?jQuery' },
        { test: /cd\-pretty\-photo|jquery\.validate|isotope\-|fizzy\-ui\-utils|desandro\-|masonry|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
          loader: 'imports?define=>false&this=>window' }
      ]
    },
    devServer : {
      contentBase : "./dist",
      hot: true
    },
    resolve : {
      root: path.resolve(__dirname),
      extensions : ["", ".js", ".jsx", ".less", ".css"],
      modulesDirectories: ["node_modules"],
      alias: {
        jquery : "jquery/src/jquery",
        modernizr$: "./.modernizrrc",
        masonry : "masonry-layout",
        isotope: 'isotope-layout'
      }
    },
    devtool :"source-map",
    plugins: [
      new CopyWebpackPlugin([
        { from : "./assets/**/*", to : "./", toType: 'dir' },
        { from : "./app/index.html", to : "./index.html", toType: 'file'  }

      ]),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        "window.$": "jquery"
      })
    ]
  }
];