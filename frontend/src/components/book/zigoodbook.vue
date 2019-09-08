<template>
    <div>
        <a :href="zihref" :style="zicolor">{{zititle}}</a>
    </div>
</template>
<script>
export default {
    components:{

    },
    props:["zititle","zicolor","zihref"]
}
</script>
<style scoped>
    a{
        white-space: nowrap;
        display: block;
        border: 1px solid #FFAC2D;
        font-size: 0.16rem;
        padding: 0.1rem 0.15rem;
        border-radius: 0.08rem;
        margin-left: 0.2rem;
    }
</style>