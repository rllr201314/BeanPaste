<template>
   <div class="con">
        <div class="sliderdiv">
            <szi v-for="(v,i) in groupprops" :key="i" :zititle="v.title" :ziimgurl="v.images.small" :zitime="v.group_topic.time" :zititle1="v.group_topic.title"></szi>
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
        groupprops:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>

</style>