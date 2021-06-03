const path= require('path');
module.exports={
    entry:{
    'bundle1':['babel-polyfill' ,'./src/index.js'],
    'bundle2':['babel-polyfill' ,'./src/search1.js'],
    'bundle3':['babel-polyfill' ,'./src/likify.js'],
},
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    devServer:{
        contentBase: './dist'
    },
    module:{        
        rules:[
          {  test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader'
            }
        }
        ]
    }
    };
