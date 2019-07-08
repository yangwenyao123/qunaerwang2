<template>
  <div class="content">
    <cityH :cities="cities"></cityH>
    <cityList :cities="cities" :hotCities="hotCities" :letter="letter"></cityList>
  
    <flex :cities="cities" @hanclick="hanclick" ></flex>
  </div>
</template>
<script>
  import cityH from './components/cityHeader'
  import cityList from './components/cityList'
  import flex from './components/flex.vue'
  export default {
    data () {
      return {
        hotCities:[],
        cities:null,
        letter:''
      }
    },
    methods:{
     hanclick (e) {
       this.letter = e
     }
    },
    components:{
      cityH,
      cityList,
      flex
    },
    mounted(){
      this.$axios.get('/api/city.json').then(res=>{
        if(res.status==200&&res.statusText=="OK"){
          var data = res.data.data
          console.log(data);
          
          this.hotCities = data.hotCities 
          this.cities = data.cities
        }
      })
    }
  }
</script>
