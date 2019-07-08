<template>
  <div class="iconlist">
    <swiper>
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="(item,index) in page" :key="index">
          <img :src="item.imgUrl" alt>
          <div class="text">{{item.desc}}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  export default {
    props:{
      iconList:Array
    },
    data() {
      return {
     
      };
    },

    computed: {
      pages:function() {
         console.log(123);
         
        const pages = [];
        this.iconList.forEach((item, index) => {
          var index = Math.floor(index / 8);
          if (!pages[index]) {
            pages[index] = [];
          }
          pages[index].push(item);
        });
        return pages 
      }
    },

    methods: {
       
    },

    mounted() {
     
    }
  };
</script>
<style scoped>
  /*  */
  .swiper-slide {
    width: 100% !important;
    display: flex;
    padding: 0.3rem;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .icon {
    width: 1.2rem;
    height: 1rem;
    margin-bottom: 1rem;

    margin-right: 0.6rem;
  }
  .iconlist .icon:nth-child(4) {
    margin-right: 0;
  }
  .iconlist .icon:nth-child(8) {
    margin-right: 0;
  }

  .icon img {
    width: 100%;
    height: 100%;
    margin-bottom: 0.2rem;
  }
</style>
