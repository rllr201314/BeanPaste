<template>
    <div class="boxx">
       <headera></headera>
       <div class="header">
           <div class="left">
               <a href="http://localhost:8080/#/signin"><img src="../../static/5.jpg" alt=""></a>
               <span>请先登录</span>
           </div>
           <div class="right">
               <a href=""><img src="../../static/4.jpg" alt=""></a>
               <a href=""><img src="../../static/3.jpg" alt=""></a>
           </div>
       </div>

        <div class="main1">
            <div>
                <p>租房找室友</p>
                <sfu :groupprops="arra"></sfu>
                <p>更多相关小组</p>
            </div>
            <div>
                <p>来聊五块钱</p>
                <sfu :groupprops="arrb"></sfu>
                <p>更多相关小组</p>
            </div>
            <div>
                <p>买买买</p>
                <sfu :groupprops="arrc"></sfu>
                <p>更多相关小组</p>
            </div>
        </div>

        <div class="footer">
            <div class="box1">
                <a href="#"><img src="../../static/1.jpg" alt=""></a>
                <p class="p22">
                    <span>豆瓣</span><br>
                    <span>我们的精神角落</span>
                </p>
            </div>
            <p class="p11">
                去 App Store 免费下载 iOS 客户端
            </p>
        </div>
    </div>
</template>
<script>
import headera from '../components/headera'
import sfu from '../components/group/sfu'
export default {
    components:{
        headera,
        sfu
    },


    data(){
        return{
            arr:[]
        }
    },
    created(){
        this.axios({
            method:"get",
            url:"/group"
        }).then((data)=>{
            console.log(data.data);
            this.arr = data.data;
        })
    },
    computed:{
        arra(){
            var newdemoa=[]
            var demoa=this.arr.filter((v,i)=>{
                if(i<=2){
                    return this.arr[i]
                }
            });
            return demoa
        },
        arrb(){
            var newdemob=[]
            var demob=this.arr.filter((v,i)=>{
                if(i>2&&i<=3){
                    return this.arr[i]
                }
            });
            return demob
        },
        arrc(){
            var newdemob=[]
            var demob=this.arr.filter((v,i)=>{
                if(i>3){
                    return this.arr[i]
                }
            });
            return demob
        }
    }


}
</script>
<style scoped>
.boxx{
    background: #fff;
}
.header{
    width: 100%;
    height: 0.6rem;
    padding: 0 0.2rem;
    margin: 0.05rem 0 0.25rem 0;
    border-bottom: 2px solid #ccc;
}
.left{
    width: 50%;
    float:left;
}
.right{
    width: 40%;
    float: right;
}
.left img{
    width: 0.488rem;
    height: 0.488rem;
}
.left span{
    display: inline-block;
    line-height: 0.5rem;
    color: #aaa;
    padding-left: 0.05rem;
    font-size: 0.14rem;
}
.right img{
    height: 0.288rem;
}
.right a{
    float: right;
    line-height: 0.6rem;
    margin-left: 0.2rem;
}

.main1 div p:nth-child(1){
    padding: 0 0.2rem;
    font-size: 0.18rem;
    color: #111;
}
.main1 div p:nth-child(3){
    text-align: center;
    color: #42bd56;
    font-size: 0.16rem;
    padding: 0.15rem 0;
}

.box1{
    width: 1.7rem;
    margin: 0 auto;
}
.p22{
    display: inline-block;
    color: #111;
}
.box1 img{
    float: left;
    margin: 0 0.05rem;
}
.p22 span:nth-child(1){
    font-size: 0.18rem;
    font-weight: 300;
}
.p22 span:nth-child(2){
    font-size: 0.12rem;
}
.p11{
    width: 100%;
    font-size: 0.14rem;
    color: #42bd56;
    text-align: center;
}
.footer{
    margin: 0.3rem 0;
}

</style>