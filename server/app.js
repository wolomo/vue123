var express = require('express')
var bodyParser = require('body-parser')
var app = express()


// 使用body-parser模块，解析表单post
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.engine('html', require('express-art-template'))


var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/getlunbo', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({success: true, message: [{url: "http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg"},
            {url: "http://b.hiphotos.baidu.com/lvpics/w=1000/sign=9b38971c908fa0ec7fc7600d16a758ee/c8ea15ce36d3d5394fe85aec3b87e950342ab0cc.jpg"},
            {url: "http://f.hiphotos.baidu.com/lvpics/w=600/sign=b7c305c7aad3fd1f3609a13a004f25ce/dcc451da81cb39db83b5f1bfd2160924aa1830e5.jpg"}
            ]})
})


app.post('/save', function (req, res) {
    res.json({success: "http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg"})
})


app.listen(7000, function () {
    console.log("app is runnning")
})
