<template>
  <div class="content" @click="hiddenYwy">
    <div class="box">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in gallaryImgs" :key="index">
          <img class="img" :src="item" alt>
        </swiper-slide>
         <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    gallaryImgs:{
      type:Array,
      default (){
        return ["http://pic30.nipic.com/20130604/12127826_163002377300_2.jpg","http://pic30.nipic.com/20130604/12127826_163002377300_2.jpg"]
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type:'fraction',
          observeParents:true,
          observer:true
     
        },
        
      },
    }
  },
  methods:{
    hiddenYwy () {
      this.$emit('hiddenYwy')
    }
  }
  
}
</script>

<style scoped>
  .content {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: #000;
    z-index: 9;
    display: flex;
    align-items: center;
  }
  .box {
    width: 100%;
    height: 5rem;
    background-color: #fff;
  }
  .swiper-container  {
    width: 100%;
    height: 100%;
    overflow: inherit !important;
  }

  .swiper-container  .img{
    width: 100%;
    height: 100%;
  }
  .swiper-pagination {
    bottom: -28px;
    color: #fff;
  }
</style>
