import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { index: 0 } // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    },
    {
      path: '/about',
      name: 'about',
      meta: { index: 1 }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
