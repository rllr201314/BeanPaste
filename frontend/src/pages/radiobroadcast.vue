<template>
    <div class="boxx">
       <headera></headera>
       <div class="header">
           <div class="pp1">
               <span>打开App,浏览更多</span>
               <p class="pp2">
                   <span>急速下载</span>
                   <span>打开</span>
               </p>
           </div>
       </div>
       <div class="header1">
           <div class="left">
               <a href="http://localhost:8080/#/signin"><img src="../../static/5.jpg" alt=""></a>
               <span>请先登录</span>
           </div>
           <div class="right">
               <a href=""><img src="../../static/4.jpg" alt=""></a>
               <a href=""><img src="../../static/3.jpg" alt=""></a>
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
export default {
    components:{
        headera
    }
}
</script>
<style scoped>
.boxx{
    background: #fff;
}
.header{
    width: 100%;
    height: 0.8rem;
    background: url(../../static/promotion_bg.b7abee9.jpg);
    background-size:cover;
    padding: 0.33rem 0.2rem;
}
.pp1 span:nth-child(1){
    color: #42bd56;
}
.pp2 span:nth-child(1),.pp2 span:nth-child(2){
    padding: 0.05rem 0.15rem;
    border: 1px solid #42bd56;
    border-radius: 0.05rem;
}
.pp2 span:nth-child(1){
    background: #42bd56;
    color: #fff;
}
.pp2 span:nth-child(2){
    color: #42bd56;
}
.pp2{
    float: right;
}

.header1{
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