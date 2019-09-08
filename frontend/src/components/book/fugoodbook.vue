<template>
   <div class="con">
        <div class="sliderdiv">
            <zigoodbook v-for="(v,i) in zigoodbookprops" :key="i" :zicolor="{color:v.color}" :zititle="v.title" :zihref="v.href"></zigoodbook>
        </div>
   </div>
</template>
<script>
import zigoodbook from './zigoodbook'
export default {
    components:{
        zigoodbook
    },
    props:{
        zigoodbookprops:{
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