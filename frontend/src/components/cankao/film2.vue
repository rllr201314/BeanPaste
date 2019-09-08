<template>
    <div class="main1">
        <P v-for="(v,i) in data" :key="i">
            <span>{{v.title}}</span>
            <span>{{v.gengduo}}</span>
        </P>
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:[
                {title:"影院热映",gengduo:"更多"},
                {title:"免费在线观影",gengduo:"更多"},
                {title:"新片速递",gengduo:"更多"},
                {title:"发现好电影",gengduo:"更多"}
            ]
        }
    }
}
</script>
<style scoped>
 .main1{
        padding: 0.1rem 0.2rem 0 0.2rem;
    }
   
    .main1 span{
        font-size: 0.16rem;
        color: #111;
        line-height: 0.4rem;
        list-style:none; 
    }
    .main1 p span:nth-child(2){
        color: #00b600;
        float: right;
    } 
</style>