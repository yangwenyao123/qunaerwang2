<template>
  <div class="content">
    <ul >
      <li v-for="(item,index) in letter" 
      :key="index" @click="hanclick"
      @touchstart="anxia"
      @touchmove="yidong"
      @touchend="likai"
      :ref="item"
      >{{item}}</li>
   
    </ul>
  </div>
</template>
<script>

export default {
  data(){
    return {
       switch:false
    }
   
  },
  props:{
    cities:Object
   
  },
  computed:{
    letter(){
      var letter = []
      for (let i in this.cities) {
        letter.push(i)
      }
      return letter
    }
  },
  methods:{
    hanclick(e){
      // console.log(e.target.innerText);
     this.$emit('hanclick',e.target.innerText)
    },
    anxia(){
      this.switch = true
    },
    yidong(e){
      if(this.switch){
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY 
        const index = Math.floor((touchY-startY)/20) 

        this.$emit('hanclick',this.letter[index])
        
      }
    },
    likai(){
      this.switch = false
    }
  },
  mounted () {
    console.log(pub);
    
  }
}
</script>
<style scoped>
.content{
   position: absolute;
   right: 0;
   top: 0;
   height: 12rem;
}
ul{
  margin-top: 4rem;
}
  li{
    width: .5rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    color: aqua;
    font-size:18px;
    
  }
</style>
