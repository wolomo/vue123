 // 引入path插件
const path = require('path');
// 布置热节点第二步骤
const wabpack = require('webpack');

// 内存中生成html页面的插件
//自动将打包好的bundle.js插入到页面中
const htmlWebpackPlugin = require('html-webpack-plugin');

// Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    // 入口配置
    entry: path.join(__dirname, './src/main.js'),
    // 出口配置
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 配置dev-server
    devServer: {
        open: true,//自动打开浏览器
        port: 3000,//指定端口
        contentBase: './src',//指定托管的目录
        hot: true,//启动热更新第一步
    },
    // 配置插件
    plugins: [
        //启用热更新的模块  启动热跟新的第三步
        // 自动追加内存中的js
        new wabpack.HotModuleReplacementPlugin() ,
       // 将html生成到内存中
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: "index.html"
        }),
        new VueLoaderPlugin()
    ],
    //配置了所有第三方模块的匹配规则
    module: {
        rules: [
            {   //正则表达式
                test:/\.css$/,
                // 从后往前调用
                // 先使用css-loader处理 .css文件类型，再调用style-loader，最后交给webpack
                use:['style-loader','css-loader']
            },
            { test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            { test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            { test:/\.js$/,use:'babel-loader', exclude: /node_modules/},
            { test:/\.vue$/,use:'vue-loader'},
            {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']}

        ]
    }

};