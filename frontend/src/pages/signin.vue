<template>
    <div class="boxx">
        <div class="top">
             <a href="#" @click="fun()">取消</a>
            <h1>登录豆瓣</h1>
        </div>

        <div class="tab">
            <div class="youxaing">
                <input type="text" id="email" placeholder="邮箱" v-model="tex">
            </div>
            <div class="mui-input-row chepwd">
            
                <input type="password" class="mui-input-password  chemima" placeholder="密码" v-model="pwd">
            </div>
            <div class="bt">
                <input type="button" value="登录" @click="func()">
            </div>
        </div>
        <a href="#" class="others">使用其他方式登录&找回密码</a>
        <div class="bot">
            <a href="http://localhost:8080/#/register" class="aleft">注册豆瓣账号</a>
            <a href="http://localhost:8080/#/index">下载豆瓣App</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tex:"",
            pwd:""
        }
    },
    methods:{
        fun(){
            this.$router.go(-1);
        },
        func(){
            // var param=new URLSearchParams();
            // param.append("tex",this.tex);
            // param.append("pwd",this.pwd);
            // this.axios({
            //     url:"http://localhost:8000/signin",
            //     method:"post",
            //     data:param
            // }).then((ok)=>{
            //     alert(ok.data.mes);
                window.location.href="http://localhost:8080/#/index"
            // },(err)=>{
            //     alert(err.data.mes);
            // })
        }
    }
}
</script>
<style scoped>
.boxx{
    background: #fff;
}
    .top{
        display: flex;
        height: .54rem;
        border-bottom: 1px solid #eee;
    }
    .top h1{
        font-size: .16rem;
        display: inline-block;
        flex: 3;
    }
    .top a{
        font-size: .14rem;
        font-weight: 400;
        line-height: .54rem;
        display: inline-block;
        flex: 2;
        color: #42bd56;
        text-decoration: none;
        text-indent: 2em;
    }
    .tab{
        width: 100%;
        padding: .37rem .2rem .25rem .2rem;
    }
    
    .youxaing input{
        width: 100%;
        margin-top: .02rem;
        height: .4rem;
        border: 1px solid #ccc;
        border-radius: .04rem;
        text-indent: .02rem;
        outline: none;
    }
    .passw input{
        width: 100%;
        margin-top: .02rem;
        height: .5rem;
        border: 1px solid #ccc;
        border-radius: .04rem;
        text-indent: .1rem;
        outline: none;
    }
    .bt input{
        width: 100%;
        margin-top: .1rem;
        height: .5rem;
        border: none;
        background-color: #17aa52;
        font-size: .16rem;
        color: #fff;
        outline: none;
    }
    .others{
        font-size: .14rem;
        color: #aaa;
        display: block;
        width: 100%;
        text-align: center;
        text-decoration: none;
        margin-bottom: .2rem;
    }
    .bot{
        font-size: 0;
    }
    .bot a{
        display: inline-block;
        font-size: .14rem;
        color: #17aa52;
        text-decoration: none;
        
    }
    .bot .aleft{
        margin-left: .9rem;
        margin-right: .3rem;
    }
    .chemima{
        height: .4rem;
    }
    .mui-input-row .mui-input-password .mui-icon-eye{
        top: .17rem;
    }
</style>