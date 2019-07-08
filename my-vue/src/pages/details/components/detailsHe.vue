<template>
<div>
  <div class="header">
    <router-link tag="div"  to="/" class="left" v-show="show">
      <i class="iconfont">&#xe606;</i>
    </router-link>
    <div class="right" v-show="!show" :style="opacityS"><router-link tag="i" to="/" class="iconfont">&#xe606;</router-link>景点详情</div>
  </div>
  
</div>
</template>
<script>
export default {
  data () {
    return {
      show:true,
      opacityS:{
        opacity:0
      }
    }
  },
  methods:{
    showHeder () {
      
      
      var scrollTop = document.documentElement.scrollTop;
      if(scrollTop>60){
        var opacity = scrollTop / 140
         opacity = opacity > 1 ? 1 : opacity
         this.opacityS ={opacity}
         this.show= false
      }else{
        this.show= true
      }
      
    }
  },
  activated () {
    window.addEventListener('scroll',this.showHeder)
  },
  deactivated(){
    window.removeEventListener('scroll',this.showHeder)
  }
}
</script>

<style scoped>

  .header{
    height: 1rem;
    display: flex;
    align-items: center;
    position: fixed;
    top:0;
    width: 100%;
  }
  .left{
    margin-left: .2rem;
    width: .8rem;
    height:  .8rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

  }
  .right{
    width: 100%;
    height: 1rem;
    background: skyblue;
    position: fixed;
    text-align: center;
    line-height: 1rem;
    color: #fff;
    font-size:18px;
  }
  .right .iconfont{
    float: left;
  
    margin-left: .4rem;
  }
</style>
