<template>
  <div class="text-container">
    <h1>曹娥简介</h1>
    <div class="image-box">
      <img src="../../assets/image/caoe2.jpg" />
    </div>
    <p>曹娥（130年～143年），会稽上虞（浙江绍兴市上虞区）人。东汉时期著名孝女。后人为纪念曹娥的孝节，在曹娥投江之处兴建“曹娥庙”，她所居住的村镇改名为“曹娥镇”，曹娥殉父之处定名为“曹娥江”。 [1]
相传其父曹盱在五月五日迎伍神（伍子胥）的祭祀活动中溺于舜江（今曹娥江）中，数日不见尸体，当时孝女曹娥年仅十四岁，昼夜沿江嚎哭。过了十七天，在五月二十二日也投江，五日后曹娥的尸体抱父尸浮出水面。就此传为神话，继而相传至县府知事，令度尚为之立碑，让他的弟子邯郸淳作诔辞颂扬。因此所住之村镇即更名为曹娥镇，殉父之江为曹娥江，并建以寺庙慰其孝心。
另也有传说认为曹娥是五月五日投江，而没有追究其父的溺江时间。</p>
<h1>曹娥起源说</h1>
  <p>东汉汉安二年（143）端午，一名巫师曹盱在舜江驾船迎“潮神”伍子胥的仪式中，因突然的狂风大作被卷入浪中，14岁的女儿曹娥数日见不着父亲的尸体，昼夜沿江号哭，不久投江而死，神奇的事情发生在五天后，当她的尸体被打捞出来时，乡民们发现，曹娥与父亲的尸身抱在了一起。乡人为纪念曹娥的孝节，改舜江为曹娥江，并以曹娥为水神。县令官听说曹娥的故事后，对其大为赞扬，上报朝廷，册封曹娥为孝女，为她立碑（《曹娥碑》）建庙，碑上清清楚楚地写着，曹盱之死是为迎伍子胥，曹娥之死是为父亲，曹娥的经历再次印证了民间端午迎伍子胥的传统。</p>
  </div>
  
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
