import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/article:id',
    name: 'ArticleContent',
    component: () => import("../views/ArticleContent.vue"),
    /*webpackChunkName:'ArticleContent'*/
    props: true
  },
  {
    path: '/:cathAll(.*)',
    name: 'NotFound',
    component: () => import("../views/NotFound.vue"),
    /*webpackChunkName:'NotFound'*/
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


