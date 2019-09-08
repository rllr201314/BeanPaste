<template>
    <div class="boxx">
        <div class="header">
            <span class="guanbi" @click="func()">关闭</span>
            <div>
                <div class="mui-input-row mui-input-search">
                    <input type="search" class="mui-input-clear" placeholder="">
                </div>
            </div>
        </div>
        <div class="nav1">
            <div class="big" v-for="(v,i) in obj" :key=i>
                <a :href="v.href" class="sp1" :style="{color:v.color}">{{v.title}}</a>
                <a :href="v.href" class="sp2">{{v.xj}}</a>
            </div>
        </div>

        <div class="footer">
            <p>
               <a href="http://localhost:8080/#/register">注册账号</a>
               <span></span>
               <a href="http://localhost:8080/#/signin"> 登录豆瓣</a>
            </p>
            <p>
                <a href="">使用桌面版</a>
                <span></span>
                <a href="http://localhost:8080/#/index">使用豆瓣App</a>
            </p>
        </div>

    </div>
</template>
<script>

export default {
    methods:{
        func(){
            // 回退上一个页面
            this.$router.go(-1);
        }
    },
    components:{
        
    },
    data(){
        return{
            obj:[
                {title:"电影",xj:"影院热映",color:"#2384E8",href:"http://localhost:8080/#/index"},
                {title:"电视",xj:"正在热播",color:"#7A6ADB",href:"http://localhost:8080/#/index"},
                {title:"图书",xj:"畅销排行",color:"#9F7860",href:"http://localhost:8080/#/index"},
                {title:"同城",xj:"周末活动",color:"#E6467E",href:"http://localhost:8080/#/index"},
                {title:"小组",xj:"志趣相投",color:"#2AB8CC",href:"http://localhost:8080/#/index"},
                {title:"音乐",xj:"新碟榜",color:"#F48F2E",href:"http://localhost:8080/#/index"},
                {title:"阅读",xj:"电子书",color:"#9F7860",href:"http://localhost:8080/#/index"},
                {title:"游戏",xj:"虚拟世界",color:"#5774C5",href:"http://localhost:8080/#/index"},
                {title:"应用",xj:"玩手机",color:"#596CDD",href:"http://localhost:8080/#/index"},
                {title:"东西",xj:"心爱之物",color:"#E1644D",href:"http://localhost:8080/#/index"},
                {title:"FM",xj:"红心歌单",color:"#40CFA9",href:"http://localhost:8080/#/index"},
                {title:"市集",xj:"购买原创",color:"#42BD56",href:"http://localhost:8080/#/index"}
            ]
        }
    }
}
</script>
<style scoped>
.boxx{
    background: #fff;
}
    .header{
        height: .5rem;
        line-height: .5rem;
        border-bottom: .01rem solid #f3f3f3;
        display: flex;
        justify-content: space-around;
    }
    .header .guanbi{
        display: inline-block;
        line-height: .5rem;
        height: .5rem;
        font-size: .15rem;    
        color: #42bd56;    
    }
    .nav1{
        margin-top: .1rem;
        padding-bottom: .3rem;
        border-bottom: .01rem solid #f3f3f3;
    }
    .big{
        display: inline-block;
        width: 33.3333%;
        text-align: center;
        margin-top: .3rem;
    }
    .big .sp1{
        font-size: .2rem;
        display: block;
    }
    .big .sp2{
        font-size: .06rem;
        display: block;
        color: #999;
    }
    .mui-input-clear{
        height: 0.3rem;
        line-height: 0.3rem;
    }


    .footer p{
        width: 100%;
        margin-bottom: 0;
        line-height: 0.5rem;
        border-bottom: .01rem solid #f3f3f3;
        text-align: center;
    }
    .footer p span{
        height: 0.3rem;
        border-left: 1px solid #f3f3f3;
    }
    .footer a{
        display: inline-block;
        width: 48.6%;
        color: #42bd56;
    }
    
</style>