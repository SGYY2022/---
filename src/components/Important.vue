<template>
    <Header />
    <side-show-2 />
    <h1 style="text-align: center;">流行习俗</h1>
     <div class="container">
        <img src="../assets/image/sailongzhou.jpeg" alt="示例图片">
        <div class="description">
            <h2>赛龙舟</h2>
            <pre>
            
                赛龙舟是多人集体划桨竞赛，其起源可追溯至战国时代，在中国南方地区普遍存在，后传入国外。
            </pre>
        </div>
    </div>
    <div class="container">
        <img src="../assets/image/aicao2.jpg" alt="示例图片">
        <div class="description">
           
            <h2>挂艾草与菖蒲</h2>
            <pre>
                端午节时间在仲夏时节，人们通过悬挂艾草与菖蒲，驱邪祛病。
            </pre>
        </div>
         <!-- <img src="../assets/image/aicao.jpg" alt="示例图片"> -->
    </div>
    <div class="container">
        <img src="../assets/image/caoyueshui.jpg" alt="示例图片">
        <div class="description">
            <h2>洗草药水</h2>
            <pre>
                草药水即沐兰汤，端午节通过洗草药水可治皮肤病、去邪气。
            </pre>
        </div>
    </div>
    <div class="container">
        <img src="../assets/image/chizongzi.jpg" alt="示例图片">
        <div class="description">
            <h2>吃粽子</h2>
            <pre>
                端午节食粽是中国的传统习俗，粽的形状很多，品种各异，一般有正三角形、正四角形、尖三角形、方形、长形等形状，主要有甜、咸两种口味。
            </pre>
        </div>
    </div>
    <div class="container">
        <img src="../assets/image/hexionghuang.jpg" alt="示例图片">
        <div class="description">
            <h2>雄黄酒</h2>
            <pre>
                端午饮雄黄酒的习俗，从前在长江流域地区极为盛行。雄黄可用做解毒剂、杀虫药，古代人由此认为雄黄可以克制蛇、蝎等百虫。
            </pre>
        </div>
    </div>
    <h1 style="text-align: center; ">少数民族特色习俗</h1>
    <div class="container">
        <img src="../assets/image/yulan.jpeg" alt="示例图片">
        <div class="description">
            <h2>浴兰习俗</h2>
            <pre>
                贵州、湖南居住的侗族，在端午节前一天，妇女要上山采集草药，回家煮成香汤洗涤身体和头发。洗完后，主妇走上竹楼，
                恭恭敬敬地包制粽把(粽子)。包粽把时，禁忌成年男子上楼。到了节日这天，家家都在祖先的牌位前供上曹蒲酒，在祖婆的
                牌位上用粽把敬奉。妇女在小孩头上缠上曹蒲叶，额头上用雄黄酒画“王”字。屋里屋外，用小椒和葛蒲熬的水喷洒，还要做雄黄大蒜油浇洒在要吃的菜肴上。沿河湖居住的侗族人有划龙船、赛龙舟的习俗，在山区居住的则有上山挖草的风习。
            </pre>
        </div>
    </div>
    <div class="container">
        <img src="../assets/image/caihua .jpeg" alt="示例图片">
        <div class="description">
            <h2>采花习俗</h2>
            <pre>
                甘肃文县一带居住的藏族，在端午节这天要过“采花节”，也叫“女儿节”。传说，在远古的时候，这里的人们不会种地、织布，人民的生活很贫困，后来从外地
                来了一位叫“莲花”的姑娘，为了改变这里藏人贫困的外貌，教人们开荒种地、纺纱织布，还采集千草百花制成药给人们治病。有一年的五月初五端午节这天，她
                上山采花草时被狂风卷走了。人们非常怀念莲花姑娘，每年端午节前一天，村里青年妇女在全村男女老幼的欢送下，由哥哥或弟弟陪同着，上山采摘鲜花，夜晚在山上燃起髯火，大家围着唱歌跳舞。端午节早晨，她们将采来的花制成花环戴在头上赶回家。亲人们在村庄前聚立，鸣枪欢迎他们回来，她们把采来的鲜花送给乡亲们，然后在晒场上欢歌舞蹈。
                歌舞停后，乡亲们拿出最美的饭菜招待采花姑娘，感谢她们给自己也给端午节带来了幸福和吉祥。
            </pre>
        </div>
    </div>
    <div class="container">
        <img src="../assets/image/yundonghui.jpeg" alt="示例图片">
        <div class="description">
            <h2>运动会习俗</h2>
            <pre>
                朝鲜族在端午节多开展一些体育运动比赛，以荡秋千、摔跤为主要比赛项目，现在增加了足球、排球、乒乓球及田径比赛项目，使端午节体育运动内容更丰富了。
                饮食方面，有做艾糕、蒸饼、做小豆包的习俗，喝首蒲酒或浊酒(米酒)，以避邪气。
            </pre>
        </div>
    </div>
</template>
<script setup>
import Header from "./Header.vue";
import  SideShow2 from "./SideShow2.vue";
//import  Battle from "./components/Battle.vue";
</script>
<style>
   /* 设置容器样式 */
.container {
    display: flex;            /* 使用 Flexbox 布局 */
    align-items: center;      /* 垂直居中 */
    padding: 20px;            /* 内边距 */
    background-color: rgba(255, 255, 255, 0); /* 背景颜色，半透明 */
    border-radius: 10px;      /* 圆角 */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0); /* 阴影 */
}

/* 设置图片样式 */
.container img {
    height: 200px;            /* 图片高度为 100px */
    width: auto;              /* 宽度自动调整以保持等比缩放 */
    transition: transform 0.3s ease; /* 过渡效果 */
    border-radius: 5px;       /* 图片圆角 */
}

/* 鼠标悬停时图片放大 */
.container img:hover {
    transform: scale(1.05);   /* 放大 5% */
}

/* 设置文字描述样式 */
.description {
    margin-left: 20px;        /* 左边距 */
    color: #333;              /* 文字颜色 */
}

.description h2 {
    margin-top: 0;            /* 去除标题的上边距 */
}

.description p {
    line-height: 1.6;         /* 段落行高 */
}
</style>