<template>
  <div class="text-container">
    <h1>屈原简介</h1>
    <div class="image-box">
      <img src="../../assets/image/quyuan2.png" />
    </div>
    <p>屈原（约前340年～前278年），芈姓（一作嬭姓），屈氏，名平，字原，又自云名正则，字灵均，出生于楚国丹阳秭归（今湖北省宜昌市），战国时期楚国诗人、政治家。楚武王熊通之子屈瑕的后代（一说屈氏的来源是西周前期的楚国人屈紃）。 [53]
屈原少年时受过良好的教育，博闻强识，志向远大。早年受楚怀王信任，任左徒、三闾大夫，兼管内政外交大事。提倡“美政”，主张对内举贤任能，修明法度，对外力主联齐抗秦。因遭贵族排挤诽谤，被先后流放至汉北和沅湘流域。 [2]前278年，楚国郢都被秦军攻破后，自沉于汨罗江，以身殉楚国。 [54]
屈原是中国历史上一位伟大的爱国诗人，中国浪漫主义文学的奠基人，“楚辞”的创立者和代表作家，开辟了“香草美人”的传统，被誉为“楚辞之祖”，楚国有名的辞赋家宋玉、唐勒、景差都受到屈原的影响。 [3]屈原作品的出现，标志着中国诗歌进入了一个由大雅歌唱到浪漫独创的新时代 [4]，其主要作品有《离骚》《九歌》《九章》《天问》等。以屈原作品为主体的《楚辞》是中国浪漫主义文学的源头之一，对后世诗歌产生了深远影响。成为中国文学史上的璀璨明珠，“逸响伟辞，卓绝一世”。“路漫漫其修远兮，吾将上下而求索”，屈原的“求索”精神，成为后世仁人志士所信奉和追求的一种高尚精神。 [1]
1953年，在屈原逝世2230周年之际，世界和平理事会通过决议，确定屈原为当年纪念的世界四大文化名人之一。</p>
<h1>屈原起源说</h1>
<p>屈原投江后，百姓纷纷划船打捞其遗体，或以鼓声吓走吃掉遗体的鱼，进而发展为赛龙舟</p>
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
