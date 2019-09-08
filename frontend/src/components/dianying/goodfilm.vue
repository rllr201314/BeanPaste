<template>
    <div>
        <div class="box">
            <fugoodfilm :zigoodfilmprops="arra"></fugoodfilm>
        </div>
        <fugoodfilm :zigoodfilmprops="arrb"></fugoodfilm>
    </div>
</template>
<script>
import fugoodfilm from './fugoodfilm'
export default {
    components:{
        fugoodfilm
    },
    data(){
        return{
            arr:[]
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/goodfilm"
        }).then((data)=>{
            console.log(data);
            this.arr=data.data;
        })
    },
    computed: {
        arra(){
            var newdemoa=[]
            var demoa=this.arr.filter((v,i)=>{
                if(i<=3){
                    return this.arr[i]
                }
            });
            return demoa
        },
        arrb(){
            var newdemoa=[]
            var demoa=this.arr.filter((v,i)=>{
                if(i>=5){
                    return this.arr[i]
                }
            });
            return demoa
        },
    },
}
</script>
<style scoped>
.box{
    margin-bottom: 0.1rem;
}
</style>