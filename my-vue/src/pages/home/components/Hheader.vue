<template>
  <div>
    <div class="header">
        <div class="left">
          <i class="iconfont">&#xe606;</i>
        </div>
        <div class="input">
          <i class="iconfont">&#xe60a;</i>
          <input type="text" placeholder="请输入关键字">
        </div>
        
        <div class="city">
            <router-link to="/city">
              <span>{{city}}</span> <i class="iconfont">&#xe665;</i>
            </router-link>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props:{
    
  },
  mounted(){
   
  },
  computed:{
     ...mapState(["city"])
  },
 
}
</script>
<style scoped>
.city a{
  color: #fff
}
  .header{
    /* width: 7.5rem; */
    display: flex;
    align-items:center;
    height: .86rem;
    background-color: #0099CC;
    justify-content:space-between;
  }
  .left{
    width: 20%;
    height: 100%;
    display: flex;
    align-items:center;
    padding-left: .1rem;
    color: #fff;
    box-sizing: border-box;
    
   
  }
   .input{
    width: 10rem;
    height: 80%;
    border-radius: .15rem;
    overflow: hidden;
    padding-left: .2rem;
    background-color: #fff;
  }
    .input .iconfont{

    }
  .input input{
    width: 80%;
    height: 100%;
  }
    .city{
    width: 3rem;
    height: 100%;
    
     display: flex;
    align-items:center;
    justify-content: center;
    color: #fff;
  }
  .city .iconfont{
    margin-left: .1rem;
  }
</style>
