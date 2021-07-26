import Vue from 'vue'
import VueRouter from 'vue-router'

import IncomeExpenseList from '@/views/IncomeExpenseList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IncomeExpenseList',
    component: () => import(/* webpackChunkName: "about" */ '../views/IncomeExpenseList.vue')

  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
