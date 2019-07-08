<template>
  <div>
    <Hheader :city="city"></Hheader>
    <swiper :swiperList="swiperList"></swiper>
    <icons :iconList="iconList"></icons>
    <cakes :recommendList="recommendList"></cakes>
    <play :weekendList="weekendList"></play>
  </div>
</template>
<script>
  import Hheader from "./components/Hheader";
  import swiper from "./components/swiper";
  import icons from "./components/icons";
  import cakes from "./components/cakes";
  import play from "./components/play";
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        iconList: [],
        recommendList: [],
        swiperList: [],
        weekendList: [],
        saveCity:''
        
      };
    },
    components: {
      Hheader,
      swiper,
      icons,
      cakes,
      play
    },
    methods: {
      axios() {
        this.$axios.get("/api/index.json?city=" + this.city).then(res => {

          var data = res.data.data;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.swiperList = data.swiperList;
          this.weekendList = data.weekendList;
        
        });
      }
    },
    computed:{
      ...mapState(['city'])
    },
    mounted () {
      this.axios();
      this.saveCity = this.city  // 把city赋值给saveCity 是为了 保存上一次的城市，当下一次city 的值改变的时候 能与上一次保存的值做对比 ，如果不相等就重新发送新请求
    },
    activated () {
      if(this.saveCity !== this.city){ // 判断city 的值跟以前的值是否一样，你也可以加个else 分支 ,但只是处理一种结果 ，要么相等 要么不相等 加else  感觉没大必要，所以 偷个懒给它取个反，要是相等的话 因为取反了所以是false 那自然不会进到这里来，如若不相等 因为加了取反符号所以就等于ture，所以它就会执行这里面的代码，但是它的本质还是不相等的，加！只是为了它能进到这里执行代码，并不能改变不相等的本质问题 
        this.saveCity = this.city
        this.axios()
      }
    }
  };
</script>