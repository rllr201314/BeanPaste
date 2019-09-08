<template>
    <div class="boxx">
        <div class="main">
        <headera></headera>
        </div>
        <div class="header">
            <span><router-link to="/film">影院热映</router-link></span>
            <span><router-link to="/radiobroadcast">欧美新碟榜</router-link></span>
            <span><router-link to="/register">注册账号</router-link></span>
            <span><router-link to="/signin">登录豆瓣</router-link></span>
        </div>
        <index1></index1>
    </div>
</template>
<script>
import headera from '../components/headera'
import index1 from '../components/index1'

export default {
    components:{
        headera,
        index1
    },
    

    
}
</script>
<style scoped>
.boxx{
    background: #fff;
}
    .header{
        padding: 0.2rem 0.2rem 0 0.2rem;
        /* background: #fff; */
    }
    .header span{
        float: left;
        padding: 0.12rem 0;
        line-height: 0.2rem;
        background: #f6f6f6;
        width: 1.62rem;
        text-align: center;
    }
    .header span a{
        color: #111;
    }
    .header span:nth-child(1),.header span:nth-child(2){
        margin-bottom: 0.1rem;
    }
    .header span:nth-child(1),.header span:nth-child(3){
        margin-right: 0.1rem;
    }
</style>