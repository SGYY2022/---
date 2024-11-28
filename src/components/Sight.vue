<template>
  <Header />
  <!-- <sideshow />  -->
    <div class="home">
      <canvas id="canvas"/>
        <div>
          <video controls class="video-css">
            <source src="../../src/assets/image/龙舟.mp4" type="video/mp4">
          </video>
          <video controls class="video-css">
            <source src="../../src/assets/image/zongzi.mp4" type="video/mp4">
          </video>
          <video controls class="video-css">
            <source src="../../src/assets/image/xionghuangjiu.mp4" type="video/mp4">
          </video>
        </div>
     
    </div>
    
    
  
    
  </template>
<script setup>
import Header from "./Header.vue";
import  sideshow from "./SideShow.vue";
//import  Battle from "./components/Battle.vue";
</script>
  <style scoped>
  .video-css{
    width: 500px;
    height: auto;
    border-radius: 10%;
  }

  </style>
  
  <script>
  import { init } from "../rain.js";
 
  
  export default {
    name: "Home",
    data() {
      return {
        canvasStyle: {
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: "-1",
          left: "0",
          bottom: "0",
        },
        ctx: {},
      };
    },
    mounted() {
      this.initCanvas();
    },
    methods: {
      initCanvas() {
        const canvas = document.querySelector("#canvas");
        this.ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      init(this.ctx);
      //window.initRain(this.ctx); 
      },
    },
   
  };
  </script>
  