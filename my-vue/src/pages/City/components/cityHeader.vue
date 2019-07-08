<template>
  <div class="content">
   
      <div class="header">
        <div class="top">
          <div class="le">
            <router-link to="/">
              <i class="iconfont">&#xe606;</i>
            </router-link>
          </div>
          <div class="right">
            <div class="tab">
              <div class="left active">境内</div>
              <div class="ri">国际/地区</div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <input type="text" placeholder="请输入城市或清音" v-model="value">
        </div>
      </div>
      <div class="list" ref="wrap" v-show="value">
        <ul >
          <li v-for="item in list" 
          :key="item.id" 
          @click="oNcity(item.name)">{{item.name}}</li>
          <li v-show="!this.list.length">没有找到匹配的数据</li>
        </ul>
      </div>
    
  </div>
</template>
<script>
  import Bscroll from "better-scroll";
  import { mapState ,mapMutations} from 'vuex'
  export default {
    props: {
      cities: Object
    },
    data() {
      return {
        value: "",
        list: [],
        timer: null
      };
    },
    methods:{
      oNcity(e){
        this.$store.commit("oNcity",e)
        this.$router.push('/')
        // this.oNcity(e) // 调用下变映射过来的 oNcity 方法并给它传个参
       
      },
      // ...mapMutations(['oNcity']), // 使用vuex 的快捷方法导致不能跳转路由
     
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrap);
    },
    
    watch: {
      value() {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        if(!this.value){
          this.list = []
          return
        } 
       
        this.timer = setTimeout(() => {
          console.log(123);

          var returl = [];
          for (let i in this.cities) {
            this.cities[i].forEach(value => {
              if (
                value.spell.indexOf(this.value) > -1 ||
                value.name.indexOf(this.value) > -1
              ) {
                returl.push(value);
              }
            });
          }
          this.list = returl;
        }, 100);
      }
    },
    components: {}
  };
</script>

<style scoped>
  .list {
    position: absolute;
    top: 2rem;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 99;
    overflow: hidden;
  }
  .list li {
    background-color: #fff;
    padding-left: 0.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border-bottom: 1px solid #ccc;
  }

  .header {
    height: 2rem;
    background-color: skyblue;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
  .top {
    height: 50%;
    display: flex;
    align-items: center;
    color: #fff;
  }
  .top .le {
    width: 2rem;
    display: flex;
    align-items: center;
  }
  .le a {
    color: #fff;
  }
  .top .right {
    display: flex;
    align-items: center;
  }
  .top .tab {
    width: 4.5rem;
    height: 0.7rem;

    border: 1px solid #fff;
    line-height: 0.7rem;
    display: flex;
    text-align: center;
  }
  .top .tab .left {
    text-align: center;
    width: 50%;
  }
  .top .tab .ri {
    text-align: center;
    width: 50%;
  }
  .active {
    background-color: #fff;
    color: skyblue;
  }
  .bottom {
    display: flex;
    align-items: center;
    height: 50%;
  }
  input {
    width: 100%;
    height: 0.7rem;
    text-align: center;
  }
</style>
