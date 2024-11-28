import { createRouter, createWebHashHistory } from "vue-router"
import Home from './components/Home.vue'
// import Historys from './components/Historys.vue'
import Important from './components/Important.vue'
import Battle from './components/Sight.vue'
import Persons from './components/Persons.vue'
import Myvideo from './components/Myvideo.vue'
import tab1 from './components/pages/Tab1.vue'
import tab2 from './components/pages/Tab2.vue'
import tab3 from './components/pages/tab3.vue'
import tab4 from './components/pages/Tab4.vue'
import Sight from "./components/Sight.vue"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    // {
    //   path: "/Historys",
    //   component: Historys,
    // },
    {
      path: "/Sight",
      component: Sight,
    },
    {
      path: "/Important",
      component: Important,
    },
    {
      path: "/Myvideo",
      component: Myvideo,
    },
    {
      path: "/Persons",
      component: Persons,
      children: [
        {
          path: "tab1",
          component: tab1
        },
        {
          path: "tab2",
          component: tab2
        },
        {
          path: "tab3",
          component: tab3
        },
        {
          path: "tab4",
          component: tab4
        }
      ]
    }
  ]
})
export default router;