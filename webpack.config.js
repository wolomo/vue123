 // 引入path插件
const path = require('path');

// 布置热节点第二步骤
const wabpack = require('webpack');

// 内存中生成html页面的插件
// 会自动将打包好的bundle.js插入到页面中
const htmlWebpackPlugin = require('html-webpack-plugin');

// Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的.
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
        //vue-loader插件
        new VueLoaderPlugin()
    ],
    /*
    *   配置了所有第三方模块的匹配规则
    *        test:正则表达式
    *        use: loader配置,从后往前调用
    *        exclude:不需要加载的部分
    *  */
    module: {
        rules: [
            //样式加载器
            { test:/\.css$/, use:['style-loader','css-loader']},
            { test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            { test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            //字体加载器
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
            //图片加载器
            { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, use: 'url-loader'},
            //es6转es5加载器
            { test:/\.js$/,use:'babel-loader', exclude: /node_modules/},
            //.vue文件加载器
            { test:/\.vue$/,use:'vue-loader'},
        ]
    }
};