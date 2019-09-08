<template>
    <div>
        <sfu :film1props="arra"></sfu>
        <sfu :film1props="arrb"></sfu>
        <sfu :film1props="arrc"></sfu>
    </div>
</template>
<script>
import sfu from './sfu'
export default {
    components:{
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

</style>