var webpack = require('webpack');
var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry : './src/main.js' , 
    mode : 'development' ,
    output : {
        path : path.resolve(__dirname ,'./dist') ,
        filename : 'bundle.js'
    },
    module: {
        rules: [
          { test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
          } ,
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                }
              },
              "css-loader"
            ]
          },
          {
            test: /\.s[ac]ss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                }
              },
              "css-loader" , 
              "sass-loader"
            ]
          }
    
        ]
      },
      resolve: {
        alias: {
          Routes: path.resolve(__dirname, './routes/'),
          Controllers: path.resolve(__dirname, './controllers/'),
          Models: path.resolve(__dirname, './models/'),
        }
      },
      plugins : [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
      ],
      "target": "node",
      node: {
       morgan: 
        "empty"
         }
}   