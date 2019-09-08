<template>
    <div>
        <img :src="ziimgurl">
        <br>
        <p>{{zititle}}</p>
        <el-rate
        v-model="value5"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}">
        </el-rate>
    </div>
</template>
<script>
export default {
    data() {
      return {
        value5: 3.7
      }
    },
    components:{

    },
    props:["zititle","ziimgurl"]
}
</script>
<style scoped>
    div{
        font-size:0px;
        margin-right: 0.08rem;
    }
    img{
        width:1.3rem;
        height:1.6rem;
    }
    p{
        font-size:0.14rem;
        width: 1.3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        color: #111;
    }
</style>
<style>
.el-rate__icon{
    font-size: .0.16rem;
    margin-right: 0.04rem;
}    
</style>