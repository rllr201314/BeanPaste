<template>
    <div>
        <div class="mui-content">
                <div class="mui-row" v-for="(v,i) in arr" :key="i">
                    <div class="mui-col-sm-6 mui-col-xs-6">
                        <li class="mui-table-view-cell">
                            <a class="mui-navigate-right" :style="{color:v.color}">
                                {{v.title1}}
                            </a>
                        </li>
                    </div>
                    <div class="mui-col-sm-6 mui-col-xs-6">
                        <li class="mui-table-view-cell">
                            <a class="mui-navigate-right" :style="{color:v.color}">
                                {{v.title2}}
                            </a>
                        </li>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[]
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/fenlei"
        }).then((data)=>{
            console.log(data)
            this.arr=data.data;
        })
    },
}
</script>
<style scoped>
 .mui-row{
        background:#fff;
    }
    .mui-col-sm-6{
        border-top: 1px solid #eee;
        border-right: 1px solid #eee;
    }
    li{
        list-style: none;
    }
</style>