import { createRouter, createWebHistory } from 'vue-router'

import QuizSetupView from '@/views/QuizSetupView.vue'
import HomeScreenView from '@/views/HomeScreenView.vue'
import QuizTemplateView from '@/views/QuizTemplateView.vue'
import QuestionTemplateView from '@/views/QuestionTemplateView.vue'
import EndScreenView from '@/views/EndScreenView.vue'
import QuizDataOverview from '@/views/QuizDataOverview.vue'
import AddCategoryview from '@/views/AddCategoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/quiztemplate',
      name: 'quiztemplate',
      component: QuizTemplateView
    },
    {
      path: '/quizsetup',
      name: 'quizsetup',
      component: QuizSetupView
    },
    {
      path: '/',
      name: 'homescreen',
      component: HomeScreenView
    },
    {
      path: '/endscreen',
      name: 'endscreen',
      component: EndScreenView
    },
    {
      path: '/question',
      name: 'question',
      component: QuestionTemplateView
    },
    {
      path: '/quizdata',
      name: 'quizdata',
      component: QuizDataOverview
    },
    {
      path: '/addcategory',
      name: 'addcategory',
      component: AddCategoryview
    }
  ]
})

export default router
