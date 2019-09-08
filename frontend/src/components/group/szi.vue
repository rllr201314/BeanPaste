<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="ziimgurl">
                    <div class="mui-media-body">
                        <span>{{zititle}}</span>
                        <span>20005人</span>
                    </div>
                    <p>
                        <span>{{zitime}}</span>
                        <span>{{zititle1}}</span>
                    </p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    components:{

    },
    props:["zititle","ziimgurl","zitime","zititle1"]
}
</script>
<style scoped>
.mui-media-body{
    font-size: 0.2rem;
    line-height: 0.4rem;
}
.mui-table-view .mui-pull-left{
    margin-right: 0.15rem;
}
.mui-media p{
    margin-top: 0.1rem;
    font-size: 0.16rem;
}
.mui-media-body span:nth-child(1){
    width: 1.9rem;
    margin-right: 0.2rem;
}
.mui-media-body span:nth-child(2){
    color: #ccc;
}
.mui-media-body span{
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mui-media p span:nth-child(2){
    width: 2.4rem;
}
.mui-media p span{
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color:#aaa;
}
</style>