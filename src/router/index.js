import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import QuizSetupView from '@/views/QuizSetupView.vue'
import HomeScreenView from '@/views/HomeScreenView.vue'
import EndScreenView from '@/views/EndScreenView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/quizstetup',
      name: 'quizsetup',
      component: QuizSetupView
    },
    {
      path: '/homescreen',
      name: 'homescreen',
      component: HomeScreenView
    },
    {
      path: '/endscreen',
      name: 'endscreen',
      component: EndScreenView
    }
  ]
})

export default router
