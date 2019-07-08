<template>
  <div class="content">
    <div class="top" @click="showywy">
      <img class="img" :src="bannerImg" alt>
      <div class="bottom">
        <div class="miaosu">{{sightName}}</div>
        <div class="icon">
          39
          <i class="iconfont">&#xe7f1;</i>
        </div>
      </div>
    </div>

    <slotx>
      <ywy :gallaryImgs="gallaryImgs" v-show="showYwy" @hiddenYwy="hiddenYwy">
      </ywy>
    </slotx>
    <detailsHe></detailsHe>
    <List :categoryList="categoryList"></List>
  </div>
</template>
<script>
  import ywy from "@/publi/ywy.vue";
   import slotx from "@/publi/slot.vue";
  import detailsHe from "./components/detailsHe.vue"; 
  import List from "./components/list.vue";

  export default {
    name:'details',
    data() {
      return {
        showYwy: false,
        sightName:'',
        bannerImg:'',
        categoryList:[],
        gallaryImgs:[]

      };
    },
  
      
      methods: {
        showywy() {
          this.showYwy = true;
        },
        hiddenYwy() {
          this.showYwy = false;
        },
        axios() {
          this.$axios
            .get("/api/detail.json", {
              params: {
                id: this.$router.params
              }
            })
            .then(res => {
              console.log(res);
              var res = res.data.data
              this.sightName = res.sightName   
              this.bannerImg = res.bannerImg
              this.categoryList = res.categoryList
              this.gallaryImgs = res.gallaryImgs
            });
        }
      },
    mounted () {
      this.axios()
    },
    components: {
      ywy,
      detailsHe,
      List,
      slotx
    }
  };
</script>

<style scoped>
  .top {
    height: 5rem;
    position: relative;
  }
  .top .img {
    width: 100%;
    height: 100%;
  }
  .bottom {
    width: 100%;
    position: absolute;
    bottom: 0.2rem;
    color: #fff;
    /* background-color: red; */
  }
  .miaosu {
    float: left;
    margin-left: 0.2rem;
  }
  .bottom .icon {
    float: right;
    width: 1rem;
    height: 0.5rem;
    margin-right: 0.5rem;
    padding-left: 0.4rem;
  }
  .icon .iconfont {
    margin-left: 0.1rem;
  }
</style>
