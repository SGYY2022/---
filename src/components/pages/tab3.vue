<template>
  <div class="text-container">
    <h1>勾践简介</h1>
    <div class="image-box">
      <img src="../../assets/image/goujian2.jpg" />
    </div>
    <p>春秋时期 越国 君主（前497年－前464年在位），越王 允常 之子。 [74] 前497年，越王勾践即位。 越王勾践元年（前496年），在 檇李 中大败吴师。 越王勾践三年（前494年），被吴军败于 夫椒，被迫向吴求和，舍身入吴。 返国后，重用 范蠡 、 文种 、 计然 等人， 卧薪尝胆，实行发展生产、增殖人口、平粜通商等政策，扩充水师、步兵，交好齐、晋、楚三国，使越国国力渐渐恢复起来。</p>
    <h1>勾践起源说</h1>
    越王勾践说，《越绝书》（东汉吴平著）上说勾践在五月五日这天操练水军，为了迷惑吴国，对外声称“竞渡”，复国后，越人便以五月五日作为纪念他的节日。
  </div>
  <p></p>
  
  <p></p>
</template>
<style scoped>
.image-box {
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 水平居中 */
  background-color: rgba(249, 249, 249, 0);
}
img {
  width: 200px;
  height: auto;
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

.text-container h1 {
  margin-top: 0;
  text-align: center;
  background: linear-gradient(45deg, #e90805, #f5a504);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 40px;
}

.text-container h2 {
  margin-top: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

h3 {
  position: relative; /* 设置相对定位，使伪元素可以相对其定位 */
  padding-left: 20px; /* 为圆点留出空间 */
  font-size: 18px; /* 设置字体大小 */
  line-height: 1.5; /* 设置行高 */
}

h3::before {
  content: ""; /* 伪元素必须有 content 属性 */
  position: absolute; /* 设置绝对定位 */
  left: 0; /* 定位到左边 */
  top: 50%; /* 垂直居中 */
  transform: translateY(-50%); /* 垂直居中 */
  width: 8px; /* 圆点的宽度 */
  height: 8px; /* 圆点的高度 */
  background-color: #000; /* 圆点的颜色 */
  border-radius: 50%; /* 设置为圆形 */
}
</style>
