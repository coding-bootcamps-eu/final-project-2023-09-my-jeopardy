import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import QuizSetupView from '@/views/QuizSetupView.vue'
import HomeScreenView from '@/views/HomeScreenView.vue'
import QuizTemplateView from '@/views/QuizTemplateView.vue'
import QuestionTemplateView from '@/views/QuestionTemplateView.vue'
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
      path: '/QuizTemplateView',
      name: 'QuizTemplateView',
      component: QuizTemplateView
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
    },
    {
      path: '/Question',
      name: 'QuestionView',
      component: QuestionTemplateView
    }
  ]
})

export default router
