import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import System from '@/components/System'
import Home from '@/components/page/home/Home'
import Diet from '@/components/page/diet/Diet'
import Sleep from '@/components/page/sleep/Sleep'
import Sport from '@/components/page/sport/Sport'
import Study from '@/components/page/study/Study'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/system',
      name: 'system',
      component: System,
      redirect: '/system/home',
      children: [
        {
          path: '/system/home',
          name: 'home',
          component: Home
        },
        {
          path: '/system/diet',
          name: 'diet',
          component: Diet
        },
        {
          path: '/system/sleep',
          name: 'sleep',
          component: Sleep
        },
        {
          path: '/system/sport',
          name: 'sport',
          component: Sport
        },
        {
          path: '/system/study',
          name: 'study',
          component: Study
        }
      ]
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
