<template>
   <div class="con">
        <div class="sliderdiv">
            <szi v-for="(v,i) in film1props" :key="i" :zititle="v.title" :ziimgurl="v.images.large"></szi>
        </div>
   </div>
</template>
<script>
import szi from './szi'
export default {
    components:{
        szi
    },
    props:{
        film1props:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
    .con{
        width: 100%;
        overflow: auto;
    }
    .sliderdiv{
        display: flex;
    }
</style>