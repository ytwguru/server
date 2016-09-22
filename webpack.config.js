var webpack = require('webpack'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  path = require("path");

function getEntry(){
  var entries = {
    app : ["./app/app.js"],
    vendor : ["./app/vendor.js"]
  };

  for (var key in entries) {
    if (entries.hasOwnProperty(key)) {
      if (process.env.NODE_ENV != "production") {
        entries[key].push("webpack-dev-server/client?http://localhost:8080/");
        entries[key].push("webpack/hot/only-dev-server");
      }
    }
  }
  return entries;
}

module.exports = [
  {
    entry : getEntry(),
    output : {
      path : "./dist",
      filename : "[name].js"
    },
    module : {
      loaders : [

        { test: /\.(woff|woff2)(\?.+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
        { test: /\.ttf(\?.+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
        { test: /\.eot(\?.+)?$/, loader: 'file'},
        { test: /\.svg(\?.+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
        { test: /\.png$/, loader: 'url-loader?mimetype=image/png'},
        { test: /\.gif$/, loader: 'url-loader?mimetype=image/gif'},
        { test: /\.jpe?g$/, loader: 'url-loader?mimetype=image/jpeg'},
        { test : /\.css$/, loader : "style!css"},
        { test : /\.less$/, loader: "style!css!less"},
        { test : /\.jsx?$/, exclude : /(node_modules|bower_components)/, loader : "react-hot!babel"},
        { test: /\.modernizrrc$/, loader: "modernizr" }
      ]
    },
    devServer : {
      contentBase : "./dist",
      hot: true
    },
    resolve : {
      root: path.resolve(__dirname),
      extensions : ["", ".js", ".jsx", ".less", ".css"],
      modulesDirectories: ["node_modules", "bower_components"],
      alias: {
        modernizr$: "./app/.modernizrrc",
        masonry : "masonry-layout",
        isotope: 'isotope-layout',
        respond: 'respond\.js/src/respond',
        "jquery.stellar" : "jquery.stellar/jquery.stellar",
        "supersized" : "bower_components/supersized/core/js/supersized.core.3.2.1.js",
        "prettyphoto" : "bower_components/prettyphoto/js/jquery.prettyPhoto.js"
      }
    },
    devtool :"source-map",
    plugins: [
      new CopyWebpackPlugin([
        { from : "./**/*", context: './app/assets', to : "./assets" }
      ]),
      new HtmlWebpackPlugin({
        template: "./app/index.html",
        inject : "body"
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name : "vendor"
      }),
      new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
      ),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        "window.$": "jquery"
      })
    ],
    node: {
      fs: "empty"
    }
  }
];