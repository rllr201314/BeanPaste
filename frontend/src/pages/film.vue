<template>
    <div class="boxx">
       <headera></headera>
        <div class="main1">
            <div class="main11">
                <p>
                    <span>影院热播</span>
                    <span>更多</span>
                    <sfu :film1props="arra"></sfu>
                </p>
                <p>
                    <span>免费在线观影</span>
                    <span>更多</span>
                    <sfu :film1props="arrb"></sfu>
                </p>
                <p>
                    <span>新片速递</span>
                    <span>更多</span>
                    <sfu :film1props="arrc"></sfu>
                </p>
            </div>
            <div>
                <p class="p1">
                    <span>发现好电影</span>
                    <span>更多</span>
                </p>
                <goodfilm></goodfilm>
            </div>
        </div>

        <div class="nav">
            <p>分类浏览</p>
            <fenlei></fenlei>
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
import sfu from '../components/dianying/sfu'
import goodfilm from '../components/dianying/goodfilm'
import fenlei from '../components/dianying/fenlei'
export default {
    components:{
        headera,
        sfu,
        goodfilm,
        fenlei
    },
    data(){
        return{
            arr:[]
        }
    },
    created(){
        this.axios({
            method:"get",
            url:"/film"
        }).then((data)=>{
            console.log(data.data);
            this.arr = data.data;
        })
    },
    computed:{
        arra(){
            var newdemoa=[]
            var demoa=this.arr.filter((v,i)=>{
                if(i<=10){
                    return this.arr[i]
                }
            });
            return demoa
        },
        arrb(){
            var newdemob=[]
            var demob=this.arr.filter((v,i)=>{
                if(i>10&&i<20){
                    return this.arr[i]
                }
            });
            return demob
        },
        arrc(){
            var newdemob=[]
            var demob=this.arr.filter((v,i)=>{
                if(i>20&&i<30){
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
    .main11,.main1 .p1{
        padding: 0 0.2rem;
    }
    .main1 span{
        font-size: 0.14rem;
        color: #111;
        line-height: 0.4rem;
        list-style:none; 
    }
    .main1 p span:nth-child(2){
        color: #00b600;
        float: right;
    } 
    .nav p{
        padding: 0.2rem 0.2rem 0 0.2rem;
        color: #111;
    }



.box1{
    width: 1.7rem;
    margin: 0 auto;
}
.p22{
    display: inline-block;
    color: #111;
}
img{
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