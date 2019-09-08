<template>
    <div>
        <div class="box" v-for="(v,i) in arr" :key="i">
            <div class="left">
                <a>
                    <img src="v.img" alt="">
                </a>
            </div>
            <div class="right">
                <span class="sp1">
                    <span class="sp2">{{v.title1}}</span>写了日记
                </span>
                <p class="p1">2019-03-04</p>
                <div class="right_main">
                    <p>豆瓣App 4.12.0 主要更新</p>
                    <span>可以写读书笔记了，同时支持编辑。</span>
                </div>
                <div class="right-buttom"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[]
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/guangbo"
        }).then((ok)=>{
            console.log(ok.data);
            this.arr=ok.data;
        })
    },
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 2.4rem;
    background: red;
    padding: 0.2rem 0.2rem 0 0.2rem;
    border-bottom: 1px solid #111; 
}
.left{
    width: 17%;
    height:100%;
    float:left; 
    background:green;
}
.left img{
    width: 0.5rem;
    height: 0.5rem;
}
.right{
    width: 83%;
    height:100%;
    float:right; 
    background:yellow;
}
.right .sp1{
    font-size: 0.16rem;
    color: #ccc;
}
.right .sp2{
    color: #111;
    font-weight: 600;
}
.right .p1{
    font-size: 0.14rem;
}
.right .right_main{
    width: 100%;
    height: 1.24rem;
    border: 1px solid #ccc;
    padding: 0 0.15rem;
}








</style>