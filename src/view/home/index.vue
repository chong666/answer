<template>
  <div class="home">    
    <div class="person">
        <router-link :to="{name:'question', params:{step:1}, query:{type:1}}"><div class="f-like"></div></router-link>
        <router-link :to="{name:'question', params:{step:1}, query:{type:0}}"><div class="f-wenke"></div></router-link>
    </div>
    <div class="ans"><img src="../../imgs/f-select.png" alt=""></div>
    <div class="left-hand"></div>
    <div class="right-hand"></div>
  </div>    
</template>
<script>
  export default{
    data: function(){
      return {

      }
    }
  }
</script>
<style>
  .home{
      width: 100%;
      height: 100%;
  }
  .person{
      width: 84%;
      height: 100%;
      margin: 0 auto;
      background: url('../../imgs/home-pepole.png') no-repeat center top;
      background-size: 100% 423px;
      position: relative;
  }
  .f-like,.f-wenke{
      position: absolute;
      top: 250px;
      width: 30%;
      height: 50px;
  }
  .f-like{
      left: 10%;
      background: url('../../imgs/f-like.png') no-repeat center center;
      background-size: contain !important;
  }
  .f-wenke{
      right: 10%;
      background: url('../../imgs/f-wenke.png') no-repeat center center;
      background-size: contain !important;
  }
  .ans{
      position: absolute;
      top: 200px;
      left: 14%;
      width: 75%;
      height: 30px;
      margin: 0 auto;
      text-align: center;
  }
  .ans img{
      width: 100%;
  }
</style>