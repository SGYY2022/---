
<template>
  <Header />
  <side-show-2 />
  <div id="oapp">
    <div v-for="(poem, index) in poems" :key="index" class="poem-card" @click="toggleText(index)">
      <div class="poem-face poem-front" :class="{ 'text-visible': poem.showText }">
        <h2>{{ poem.title }}</h2>
        <span>{{ poem.author }}</span>
        <div class="poem-content" v-show="poem.showText">
          <p v-for="(line, lineIndex) in poem.content" :key="lineIndex">{{ line }}</p>
          <!-- Uncomment if you have notes for the poem -->
          <!-- <h3>注释</h3>
          <ul>
            <li v-for="(note, noteIndex) in poem.notes" :key="noteIndex">{{ note }}</li>
          </ul> -->
        </div>
      </div>
      <img :src="poem.image" :alt="poem.author" class="poem-image" :class="{ 'image-hidden': poem.showText }" />
    </div>
  </div>
</template>
<script setup>
import Header from "./Header.vue";
import  sideshow from "./SideShow2.vue";
//import  Battle from "./components/Battle.vue";
</script>
<script>


export default {
  name: 'App',
  data() {
    return {
      poems: [
        {
          title: '端午',
          author: '唐·文秀',
          content: [
            '竞渡深悲千载冤，',
            '忠魂一去讵能还。',
            '国亡身殒今何有，',
            '只留离骚在世间。'
          ],
         
          image: '../../src/imgs/wenxiu.jpg',
          showText: false
        },
        {
          title: '端午日',
          author: '唐·殷尧藩',
          content: [
            '少年佳节倍多情，',
            '老去谁知感慨生。',
            '不效艾符趋习俗，',
            '但祈蒲酒话升平。'
          ],
         
          image: '../../src/imgs/yinraofan.jpg',
          showText: false
        },
        // ... other poems data
        {
          title: '浣溪沙·端午',
          author: '宋·苏轼',
          content: [
            '轻汗微微透碧纨，',
            '明朝端午浴芳兰。',
            '流香涨腻满晴川，',
            '彩线轻缠红玉臂，',
            '小符斜挂绿云鬟。',
            '佳人相见一千年。'
            
          ],
         
          image: '../../src/imgs/sushi.jpg',
          showText: false
        },
        {
          title: '乙卯重五诗',
          author: '宋·陆游',
          content: [
            '重五山村好，',
            '榴花忽已繁。',
            '粽包分两髻，',
            '艾束著危冠。'
          ],
         
          image: '../../src/imgs/luyou.jpg',
          showText: false
        },
       
      ]
      
    };
  },
  methods: {
    toggleText(index) {
      this.poems[index].showText = !this.poems[index].showText;
    }
  }
};
</script>

<style>
#oapp {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
}

.poem-card {
  width: 300px;
  height: 400px;
  margin: 20px;
  position: relative;
  cursor: pointer;
  background-color: #14b570;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  overflow: hidden;
  background-image: url('../imgs/zhizhang.png');
  background-size: cover;
}

.poem-face {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  border-radius: 15px;
  overflow: hidden;
}

.poem-front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3px;
  color: #3e7834;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8); /* semi-transparent background */
}

.poem-front h2 {
  font-size: 24px;
  color: #22ba85;
  margin-bottom: 10px;
}

.poem-front p {
  font-size: 16px;
  margin: 5px 0;
}

.poem-content {
  display: none; /* Initially hide the content */
}

.text-visible .poem-content {
  display: block; /* Show the content when text is visible */
}

.poem-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  transition: opacity 0.5s ease;
}

.image-hidden {
  opacity: 0; /* Hide the image when text is visible */
}

/* ... other styles ... */
</style>
 

