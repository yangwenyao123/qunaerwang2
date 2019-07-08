<template>
  <div class="content">
    <div class="item" v-for="(item,index) in weekendList" :key="index">
      <div class="top">
        <img :src="item.imgUrl" alt>
      </div>
      <div class="bottom">
        <h2 class="margin-bottom">{{item.title}}</h2>
        <p>{{item.desc}}</p>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  props:{
    weekendList:Array
  }
}
</script>
<style scoped>
.content{
  padding-top: .5rem;
  background-color: #ccc;
}
.item{
  background-color: #fff;
}
  .top {
    height: 3rem;
  }
  .top img {
    width: 100%;
    height: 100%;
  }
  .bottom {
    padding: 0.2rem;
    height: 1rem;
  }
  .margin-bottom {
    margin-bottom: 0.2rem;
  }
</style>
