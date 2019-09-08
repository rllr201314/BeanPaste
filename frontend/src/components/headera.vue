<template>
   <div>
      <div class="row11">
            <router-link to="/index">豆瓣</router-link>
            <router-link to="/navigation" href="http://localhost:8080/#/navigation"><span class="mui-icon mui-icon-bars"></span></router-link>
            <router-link to="/group">小组</router-link>
            <router-link to="/radiobroadcast">广播</router-link>
            <router-link to="/books">图书</router-link>
            <router-link to="/film">电影</router-link>
      </div>
 </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .row11{
       width: 100%;
       height: 0.5rem;
       line-height: 0.5rem;
       border-bottom: .01rem solid #f3f3f3;
       padding: 0 0.2rem;
   }
   .row11 a:nth-child(1){
      color: #00b600;
      font-size: 0.24rem;
      font-weight: 600;
   }
   .row11 a:nth-child(2),.row11 a:nth-child(3),.row11 a:nth-child(4),.row11 a:nth-child(5),.row11 a:nth-child(6){
      font-size: 0.16rem;
      margin-left: 0.11rem;
      float: right;
   }
   .row11 a:nth-child(2){
      color:#00b600;
   }
   .row11 a:nth-child(3){
      color: rgb(42, 184, 204);
   }
   .row11 a:nth-child(4){
      color: rgb(228, 168, 19);
   }
   .row11 a:nth-child(5){
      color: rgb(159, 120, 96);
   }
  .row11 a:nth-child(6){
      font-size: 0.16rem;
      color: rgb(35, 132, 232);
   }
</style>