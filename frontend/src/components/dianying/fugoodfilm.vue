<template>
   <div class="con">
        <div class="sliderdiv">
            <zigoodfilm v-for="(v,i) in zigoodfilmprops" :key="i" :zicolor="{color:v.color}" :zititle="v.title" :zihref="v.href"></zigoodfilm>
        </div>
   </div>
</template>
<script>
import zigoodfilm from './zigoodfilm'
export default {
    components:{
        zigoodfilm
    },
    props:{
        zigoodfilmprops:{
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