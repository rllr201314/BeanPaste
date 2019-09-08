<template>
    <div>
        <div class="box">
            <fugoodbook :zigoodbookprops="arra"></fugoodbook>
        </div>
        <fugoodbook :zigoodbookprops="arrb"></fugoodbook>
    </div>
</template>
<script>
import fugoodbook from './fugoodbook'
export default {
    components:{
        fugoodbook
    },
    data(){
        return{
            arr:[]
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/goodbook"
        }).then((data)=>{
            console.log(data);
            this.arr=data.data;
        })
    },
    computed: {
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
            var newdemoa=[]
            var demoa=this.arr.filter((v,i)=>{
                if(i>=4){
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