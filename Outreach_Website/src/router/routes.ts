import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import K12View from '@/views/K12View.vue'
import ProfessionalView from '@/views/ProfessionalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: K12View
    },
    {
      path: '/tours',
      name: 'tours',
      component: ProfessionalView
    }
  ]
})

export default router
