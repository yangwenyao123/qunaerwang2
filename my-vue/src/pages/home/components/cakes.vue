<template>
  <div class="content">
      <div class="title">热销推荐</div>
      <ul>
        <router-link tag="li"
         v-for="(item,index) in recommendList" 
         :key="index"
         :to="/details/+item.id"
         >
          <div class="left">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="right">
            <h2 class="margin-bottom">{{item.title}}</h2>
            <p class="margin-bottom">{{item.desc}}</p>
            <div class="margin-top"><span class="price">￥</span><strong>99</strong><span class="qi">起</span></div>
          </div>
        </router-link>
      </ul>
      <div class="gengduo">查看所有</div>
  </div>
</template>
<script>
export default {
  props:{
    recommendList:Array
  },
  data(){
    return {
      
    }
  }
}
</script>
<style scoped>
.gengduo{
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: aqua;
}
  .title{
    height: .8rem;
    background-color: rgb(247, 239, 239);
    line-height: .8rem;
    padding-left: .2rem;
    color: #000;
  }
  ul{
    
  }
  li{
    height: 1.4rem;
   
    padding: .1rem;
    border-bottom: 1px solid #ccc;
  }
  .left{
    width: 1.6rem;
    height: 100%;
   
    margin-right: .1rem;
    float: left;
  }
  .left img{
    width: 100%;
    height: 100%;
  }
  .right{
    /* width: 3rem; */
  
    float: left;
    
  }
   .right p{
      color: #999;
   }

  .margin-bottom{
    margin-bottom:.2rem;
  }
  .margin-top{
    margin-top:.3rem;
  }
  .right strong{
    color: red;
  } 
  .price{
    font-size:.2rem;
  }
  .qi{
     font-size:.2rem;
  }
</style>
