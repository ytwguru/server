require('dotenv').config({silent: true});

var webpack = require('webpack'),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  StatsPlugin = require('stats-webpack-plugin'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  fs = require("fs"),
  path = require("path");

/**
 * Entry points for the application
 *
 * @returns {{app: string[], vendor: string[]}}
 */
function getEntry(){
  var entries = {
    app : ["./client/index.js"],
    vendor : ["./client/vendor.js"]
  };

  if (process.env.NODE_ENV != "production") {
    for (var key in entries) {
      if (entries.hasOwnProperty(key)) {
        entries[key].push("webpack-dev-server/client?http://localhost:8080/");
        entries[key].push("webpack/hot/only-dev-server");
      }
    }
  }

  return entries;
}

/**
 * Module loaders for the application
 *
 * @returns {{loaders: *[]}}
 */
function getModule(){
  return {
    loaders : [

      { test: /\.(woff|woff2)(\?.+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      { test: /\.ttf(\?.+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      { test: /\.eot(\?.+)?$/, loader: 'file'},
      { test: /\.svg(\?.+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png'},
      { test: /\.gif$/, loader: 'url-loader?mimetype=image/gif'},
      { test: /\.jpe?g$/, loader: 'url-loader?mimetype=image/jpeg'}, 
      { test : /\.json$/, loader : "json" },
      { test : /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test : /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
      { test : /\.jsx?$/, exclude : /(node_modules)/, loader : "react-hot!babel"},
      { test: /\.modernizrrc$/, loader: "modernizr" }
    ]
  };
}

function getTemplateDetails(){
  if (process.env.NODE_ENV != "production") {
    return {
      template: "./client/views/index.html",
      inject : "body"
    };
  } else {
    return {
      template: "./client/views/index.dist.html",
      inject : "body"
    };
  }
}

/**
 * Get the plugins for webpack
 *
 * @returns {*[]}
 */
function getPlugins(){
  var plugins;
  plugins = [
    new HtmlWebpackPlugin(getTemplateDetails()),
    new webpack.optimize.CommonsChunkPlugin({
      name : "vendor"
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery"
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV : JSON.stringify(process.env.NODE_ENV),
        SITE_PORT : JSON.stringify(process.env.SITE_PORT),
        SUPPORT_EMAIL : JSON.stringify(process.env.SUPPORT_EMAIL),
        MANDRILL_API_KEY : JSON.stringify(process.env.MANDRILL_API_KEY)
      }
    })
  ];
  return plugins;
}

/**
 * Set aliases and extensions
 *
 * @returns {{root, extensions: string[], modulesDirectories: string[], alias: {modernizr$: string, masonry: string, isotope: string, respond: string, [jquery.stellar]: string, prettyphoto: string}}}
 */
function getResolve(){
  return {
    root: path.resolve(__dirname),
    extensions : ["", ".js", ".jsx", ".less", ".css"],
    modulesDirectories: ["node_modules"],
    alias: {
      modernizr$: "./client/.modernizrrc",
      masonry : "masonry-layout",
      isotope: 'isotope-layout',
      respond: 'respond.js/src/respond',
      "jquery.stellar" : "jquery.stellar/jquery.stellar"
    }
  };
}

/**
 * Set path and settings for default dev server
 *
 * @returns {{contentBase: string, hot: boolean}}
 */
function getDevServer(){
  return {
    contentBase : "./dist",
    hot: true
  };
}

module.exports = [
  {
    entry : getEntry(),
    output : {
      path : "./dist",
      filename : "[name].js"
    },
    module : getModule(),
    devServer : getDevServer(),
    resolve : getResolve(),
    devtool :"source-map",
    plugins: getPlugins(),
    node: {
      fs: "empty"
    }
  }
];