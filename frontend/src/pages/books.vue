<template>
    <div class="boxx">
       <headera></headera>
        <div class="main1">
            <div class="main11">
                <p>
                    <span>最受关注图书 | 虚构类</span>
                    <span>更多</span>
                </p>
                <sfu :film1props="arra"></sfu>
                <p>
                    <span>最受关注图书 | 非虚构类</span>
                    <span>更多</span>
                </p>
                <sfu :film1props="arrb"></sfu>
                <p>
                    <span>豆瓣纸书</span>
                    <span>更多</span>
                </p>
                <div class="zhishu">
                    <div class="left">
                        <img src="../../static/book_zw.fc645eb.jpg" alt="">
                    </div>
                    <div class="right">
                        <p class="ppp">
                            <span>造物</span>
                            <span>￥68</span>
                        </p>
                        <span class="span1">改变世界的万物图典,3000幅图里的发明与冒险</span>
                    </div>
                </div>
                <sfu :film1props="arrc"></sfu>
            </div>
            <div>
                <p class="p1">
                    <span>发现好书</span>
                    <span>更多</span>
                </p>
                <goodbook></goodbook>
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
import fenlei from '../components/dianying/fenlei'
import goodbook from '../components/book/goodbook'
import sfu from '../components/book/sfu'
export default {
    components:{
        headera,
        fenlei,
        goodbook,
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
            url:"/bookss"
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
                if(i>15){
                    return this.arr[i]
                }
            });
            return demob
        },
        arrc(){
            var newdemob=[]
            var demob=this.arr.filter((v,i)=>{
                if(i>25){
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


.zhishu {
    width: 100%;
    height: 1.4rem;
    margin-bottom: 0.25rem;
}

.zhishu .left{
    width: 1.2rem;
    height: 1.5rem;
    float: left;
}
.zhishu .left img{
    width: 100%;
    height: 100%;
}
.zhishu .right{
    float: left;
    width: 1.8rem;
    margin-left: 0.2rem;
}
.zhishu .right .ppp span:nth-child(1){
    font-size: 0.2rem;
    color: #000;
}
.zhishu .right .ppp span:nth-child(2){
    color: #e76648;
}
.zhishu .right .span1{
    font-size: 0.12rem;
    color: #9b9b9b;
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