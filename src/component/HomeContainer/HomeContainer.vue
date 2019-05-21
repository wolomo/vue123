<template>
    <div class="HomeContainer">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
<!--                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>-->
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>

    </div>

</template>

<script>
import {Toast} from 'mint-ui'

    export default {
        data(){
            return{
                lunbotuList:[]
            }
        },
        created() {
            this.getLunbo()
        },
        methods:{
            getLunbo(){
                this.$http.get("http://127.168.1.1:7000/getlunbo").then(result=>{
                    console.log(result.body)
                    if (result.body.success){
                        this.lunbotuList=result.body.message;
                    } else{
                        Toast("加载轮播图失败")
                    }
                })
            }
        }
    };
</script>

<style scoped lang="scss">
    .mint-swipe{
        height: 300px;
        .mint-swipe-item:nth-child(1){
            background-color: #ccc;
        }
        .mint-swipe-item:nth-child(2){
            background-color: #643131;
        }
        .mint-swipe-item:nth-child(3){
            background-color: #acf456;
        }
        img{
            height: 100%;
            width: 100%;
        }
    }

    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: 0;
        img{
            height: 60px;
            width: 60px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }
</style>