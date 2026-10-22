import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BSITpage from '../views/BSITpage.vue'
import BSCSpage from '../views/BSCSpage.vue'
import BSDMIApage from '../views/BSDMIApage.vue'
import BLISpage from '../views/BLISpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bsit',
      name: 'bsit',
      component: BSITpage,
    },
    {
      path: '/bscs',
      name: 'bscs',
      component: BSCSpage,
    },
    {
      path: '/bsdmia',
      name: 'bsdmia',
      component: BSDMIApage,
    },
    {
      path: '/blis',
      name: 'blis',
      component: BLISpage,
    },
  ],
})

export default router