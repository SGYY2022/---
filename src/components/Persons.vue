<template>
  <Header />
  <!-- <sideshow /> -->
  <div class="text-container1">
               <p style="text-align: center;">节日起源</p>
端午节的起源，从古至今说法不一，主要说法有：纪念历史人物说、恶日禁忌说、祭祀龙图腾说、夏至说等。
    </div>
  <div class="gallery-container">
    <div
      v-for="(item, index) in images"
      :key="index"
      class="image-wrapper"
      @mouseover="handleHover(index)"
      @mouseleave="handleLeave(index)"
      @click="handleClick(item.route)"
    >
      <img
        :src="item.src"
        :class="{ 'image-zoom': isHovered[index] }"
      />
      <div class="image-caption">{{ item.caption }}</div>
    </div>
  </div>
  <router-view></router-view>
</template>


<script setup>
import Header from "./Header.vue";
import  sideshow from "./SideShow.vue";
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import image1 from '../assets/image/quyuan.webp';
import image2 from '../assets/image/wuzixv.jpg';
import image3 from '../assets/image/goujian.jpg';
import image4 from '../assets/image/caoe.png';
const router = useRouter();
const images = ref([
  { src: image1, caption: '屈原', route: '/Persons/tab1' },
  { src: image2, caption: '伍子胥', route: '/Persons/tab2' },
  { src: image3, caption: '勾践', route: '/Persons/tab3' },
  { src: image4, caption: '曹娥', route: '/Persons/tab4' },
]);

const isHovered = ref(Array(4).fill(false));

const handleHover = (index) => {
  isHovered.value[index] = true;
};

const handleLeave = (index) => {
  isHovered.value[index] = false;
};

const handleClick = (route) => {
  router.push(route);
};
</script>

<style scoped>
.gallery-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.image-wrapper {
  text-align: center;
  cursor: pointer;
}

.image-wrapper img {
  width: 200px;
  height: 200px;
  transition: transform 0.3s;
}

.image-wrapper img.image-zoom {
  transform: scale(1.1);
}

.image-caption {
  margin-top: 10px;
  font-size: 16px;
  color: #333;
}
.text-container1 {
  width: 60%;
  margin: 0 auto;
  padding: 40px;
  background-color: #34e2a2;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /*text-align: center;*/
  background-color: rgba(84, 219, 143, 0.3);
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #109483;
}
</style>