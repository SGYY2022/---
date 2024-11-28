<template>
  
  <Header />
    <sideshow />
  <div class="text-container">
    <h1>百科简介</h1>
    <h2>节日名称</h2>
    <h3>名字由来：</h3>
    “端午”二字最早出现于西晋《风土记》，“端”意为初始，因此“端五”就是“初五”，而按照历法五月正是“午”月，因此“端五”即为“端午”。<br>
    <h3>节日别称：</h3>
    端午节在中国所有传统节日中别称最多，有二十多个，如端阳节、重午节、五月节、天中节、浴兰节、蒲节、女儿节等。
    <br>
    
    <h2>传承发展</h2>
    <strong>古代时期：</strong> <br>
    <h3>上古时期：</h3><br>
    端午节并非固定在某一天，而是根据干支历法选择五月内的第一个午日进行庆祝。<br>
    <h3>秦汉时期：</h3>
    <br>
    秦汉时期，主要使用夏历，而夏历中五月被称为“午月”，因此将“午月午日”称为“端午”。<br>
    <h3>魏晋南北朝时期：</h3>
    <br>
    随着人口迁徙，南北方端午观念与习俗融合，南方以夏至为新年的尝新、庆丰收等习俗和北方的避恶观念相互交融在整体端午习俗中。该时期，角黍、竞渡、食粽等主要的端午事项出现在记载中，关于端午节的传说也多了起来。<br>
    <h3>隋唐时期：</h3>
    <br>
    隋唐开始，对于端午习俗的记载更多，如“竞渡”和“龙舟”，在前朝被认为起源于南方的竞渡，开始向北方流行，还出现了新的习俗，如拜天之礼、射柳、击鞠等。<br>
    <h3>明代时期：</h3>
    <br>
    到了明代，端午节吸收了金人射柳的风俗，把端午又称“女儿节”。这时期，端午风俗活动形式变化虽不大，但是规模却愈来愈盛行，尤其南方的龙舟竞渡，成为轰动一时的盛举。<br>
    <strong>近代以来：</strong>
    <h3>民国以来：</h3><br>
    民国以来，端午节的部分被认为是“迷信”传统习俗逐渐被遗忘，但粽子始终是端午节的重要食品。<br>
    <h3>新中国成立后：</h3>
    2006年，端午节民俗被列为国家级非物质文化遗产，2007年被正式纳入国家法定假日。2009年9月30日，经联合国教科文组织批准，将端午节列入《人类非物质文化遗产代表作名录》，使其成为中国首个获此殊荣的节日。<br>
   
  </div>
</template>
<script setup>
import Header from "./Header.vue";
import  sideshow from "./SideShow.vue";
//import  Battle from "./components/Battle.vue";
</script>
<style>
html {
  font-family: "microsoft yahei, arial, helvetica, sans-serif";
  font-size: 16px;
  background-image: url("../assets/image/A.jpg"); /* 确保路径正确 */
  background-size: cover; /* 覆盖整个页面 */
  background-position: center; /* 居中显示 */
  background-attachment: fixed; /* 固定背景，不随滚动条滚动 */
}
.text-container {
  width: 60%;
  margin: 0 auto;
  padding: 40px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /*text-align: center;*/
  background-color: rgba(255, 255, 255, 0.3);
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
</style>
