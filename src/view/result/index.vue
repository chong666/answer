<template>
	<div class="result_box">
        <div class="Pi">
            <img src="../../imgs/seal.png" alt="">
        </div>
        <div class="scholl">
          	<h1>{{one.name}}</h1>
        </div>
        <div class="result_scholl">
            <h4>专业类别：<span>{{one.majors}}</span></h4>
            <h4>专业特点：<span>{{one.character}}</span></h4>
        </div>
        <div class="left">
            <img src="../../imgs/btn-intr.png" alt="">
        </div>
        <div class="right">
            <img src="../../imgs/btn-share.png" alt="">
        </div>
  </div>
</template>

<script>
  export default {
   	data:function(){
   		return {
   			data:"",
        	one:""
   		}
   	},
   	created:function(){
   		this.$http.get("../src/service/school_list.json").then((data) => { 			
			// console.log(data)
			this.data = Object.values(data.data) 
      		this.one = this.ran() 				
   		})	
   	},
   	methods:{
   		ran:function(){
   			return this.data[Math.floor(Math.random()*this.data.length)]
   		}
   	}   
  }
</script>

<style>
    #app {
        overflow: hidden;
        font-size:16px;
    }
    body {
        background: url("../../imgs/bg.jpg") no-repeat center center;
        background-size: cover;
    }
    .scholl{
      width: 90%;
      position: absolute;
      top:120px;
      text-align: center;
      font-size: 22px;
      font-weight: bold;
      color:blue;
    }
    .left{
        width:130px;
        height:70px;
        position:absolute;
        left:12%;
        top:54%;
    }
    .right{
        width:130px;
        height:70px;
        position:absolute;
        right:8%;
        top:54%;
    }
    .left img{
        width:80%;
        height:100%;
    }
     .right{
        width:140px;
        height:70px;
    }
    .right img{
        width:80%;
        height:100%;
    }
    .Pi{
        width:130px;
        height:130px;
        position: absolute;
        right:0%;
        top:0%;
    }
    .Pi img{
        width:100%;
        height:100%;
    }
    .result_box{
        width:90%;
        height:75%;
        background: url("../../imgs/bg-matriculate.png") no-repeat;
        background-size:100% 100%;
        margin:30px auto;
    }
    .result_scholl{
        width: 80%;
        position:absolute;
        left:10%;
        top:34%;       
    }
    .result_scholl h4{
        width: 100%;
        line-height:26px;
    }
    .result_scholl span{
        font-weight:normal;
    }
</style>