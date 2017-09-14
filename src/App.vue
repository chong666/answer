<template>
  <div id="app">
    <router-view></router-view>
    <mask-view ref="mask"></mask-view> 
  </div>
</template>

<script>
  import maskView from './components/glocal.vue';
  export default {
    name: 'app',
    components: {
      "mask-view": maskView,
    }
    // mounted: function(){
    //   console.log(this.refs.mask)
    // },
    // watch: {
    //   "router": function(n){
    //     if(n.name == 'question'){
    //       this.$refs.mask.show();        
    //     }else{
    //       this.$refs.mask.hide();
    //     }
    //   }
    // }
    // beforeRouteLeave: (to, from, next)=>{
    //   console.log(to);
    //   this.$refs.mask.show();
    //   next()
    // }
  }
</script>

<style>
  @import "./css/reset.css";

  body{  
    height: 100%;
    background: url('imgs/bg.jpg') no-repeat;
    background-size: cover !important;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    height: 100%;
  }
  
</style>
