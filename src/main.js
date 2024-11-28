import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from "./router.js";
const app = createApp(App);

app.use(router);
app.mount('#app')

// //
// // 导入视频播放组件
// import VueVideoPlayer from '@videojs-player/vue'
// import 'video.js/dist/video-js.css'



// 视频播放组件
// app.use(VueVideoPlayer)
