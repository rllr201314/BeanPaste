<template>
<div>
    <div class="box1"  v-for="(v,i) in arr" :key="i">
        <div class="box2">
            <h3 class="hh3">{{v.title}}</h3>
            <p>{{v.content}}</p>
            <div><span>{{v.category_name}}</span></div>
        </div>
        <img :src="v.image">
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
    created(){
        this.axios({
            method:"get",
            url:"/index1"
        }).then((data)=>{
            console.log(data.data);
            this.arr = data.data;
        })
    }
}
</script>


<style scoped>
    div{
      font-size:0;
    }
    .box1{
        width: 100%;
        height:1.71rem;
        padding: 0.1rem 0.2rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.01rem solid #e3e3e3;
    }
    .box2{
        width: 2.4rem;
    }
    /* .box2 .hh3{
        margin-top: 0.4rem;
    } */
    div{
        font-size: 0;
    }
    h3{
        font-size: 0.16rem;
        color: #494949;
        font-family: "微软雅黑";
        /* line-height: 0.2rem; */
        text-align: justify;
        padding-right: 0.01rem;
    }
    p{
        font-size: 0.12rem;
        font-family: sans-serif; 
        height: 0.4rem;
        color: #AAAAAA;
        padding: 0.05rem 0; 
        
        white-space: wrap;
        overflow-y: hidden;
        text-overflow:ellipsis ;    
    }
    img{
        display: block;
        width:0.84rem;
        height: 1.3rem;
        padding-top: 0.2rem;
    }
    span{
        font-size: 0.12rem;
        color:#AAAAAA;
    } 
   
</style>