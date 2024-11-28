<template>
  <div class="text-container">
     <h1>伍子胥简介</h1>
    <div class="image-box">
      <img src="../../assets/image/wuzixv2.png" />
    </div>
    <p>伍子胥（？～前484年），名员，又名贠，字子胥，楚国（今属湖北监利）人。春秋末期吴国大夫、军事家、谋略家。春秋后期楚国大夫伍奢之子。 [33] [39]
伍子胥原为楚国人，父亲伍奢因直谏被楚平王所杀，伍子胥逃至吴国，投靠公子光门下，策划刺杀吴王僚。前514年，刺杀吴王僚之子庆忌成功，伍子胥官至吴太宰。前512年，提出将吴军分为三部轮番攻楚的建议。前506年，伍子胥与孙武等人在柏举击败楚军主力，长驱攻入楚都郢。前496年，吴王病亡，吴王夫差采纳太宰伯嚭放回勾践的建议，伍子胥当面反对吴王的做法，但是没有被采纳。伍子胥又规劝吴王不要攻打齐国，因夫差取得艾陵之战的胜利，而渐渐被吴王疏远。前484年，吴王夫差赐剑令其自尽，死后尸体被投入钱塘江。 [34] [35]
伍子胥是古代水战兵法的开创者，在中国兵学史上具有重要地位，代表作品有《水战兵法》。伍子胥对苏州的水利建设也作出了巨大贡献，主持开挖了世界上第一条人工运河胥江，既避免了吴地的水患，又便利了当地的漕运和灌溉，对当地百姓的生计发展有着重大的意义。
。</p>
<h1>伍子胥起源说</h1>
<p>伍子胥，本为楚国人，因其家族在楚国被迫害，辗转流亡至吴国，协助公子光成为吴王阖闾，被后者重用。阖闾去世后，伍子胥以辅政大臣身份辅佐吴王夫差，大败越国后，越王勾践请和，夫差答应，伍子胥认为应一举消灭越国，若是留下勾践，此后必有祸患，夫差不听，反倒在越人挑拨下赐其宝剑自尽。
  临死前，伍子胥留下遗言，要家人在他死后将双眼挖出，挂在东城门上亲眼看着越国军队入城灭吴，夫差得知后，暴跳如雷，赶忙命令手下将伍子胥尸首扔进江里。后来，勾践东山再起，一举灭吴。因为相传伍子胥尸体于公元前484年五月五日被抛往钱塘江，所以民间认为钱塘江潮就是伍子胥指挥水兵来淹夫差的
  ，伍子胥亦成为“潮神”，百姓为其立祠于江上，于每年忌日即五月初五设祭。</p>
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
