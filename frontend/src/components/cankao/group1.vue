<template>
    <div>
        <sfu :film1props="arra"></sfu>
        <sfu :film1props="arrb"></sfu>
        <sfu :film1props="arrc"></sfu>
    </div>
</template>
<script>
import sfu from '../group/sfu'
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
            url:"/group1"
        }).then((data)=>{
            console.log(data.data);
            this.arr = data.data;
        })
    },
    computed:{
        arra(){
            var newdemoa=[]
            var demoa=this.arr.filter((v,i)=>{
                if(i<=2){
                    return this.arr[i]
                }
            });
            return demoa
        },
        arrb(){
            var newdemob=[]
            var demob=this.arr.filter((v,i)=>{
                if(i>2&&i<=3){
                    return this.arr[i]
                }
            });
            return demob
        },
        arrc(){
            var newdemob=[]
            var demob=this.arr.filter((v,i)=>{
                if(i>3){
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