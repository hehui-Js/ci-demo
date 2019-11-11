import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  meta: {
    index: 0,
    icon: 'ios-appstore',
    title: '首页'
  } // meta对象的index用来定义当前路由的层级,由小到大,由低到高
},
{
  path: '/about',
  name: 'about',
  meta: {
    index: 1,
    icon: 'md-appstore',
    title: '关于'
  }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
}, {
  path: '/user',
  name: 'user',
  component: () => import(/* webpackChunkName: "user" */ './views/User.vue'),
  meta: {
    icon: 'ios-person',
    title: '用户'
  },
  children: [{
    path: '/user/profile',
    component: () => import('./views/UserProfile.vue'),
    meta: {
      icon: 'ios-plane',
      title: '个人信息'
    },
    children: [{
      path: '/user/profile/book',
      meta: {
        icon: 'ios-book',
        title: '我的书籍'
      },
      component: () => import('./views/UserProfile.vue')
    }]
  },
  {
    path: '/user/post',
    component: () => import('./views/UserPost.vue'),
    meta: {
      icon: 'ios-pin',
      title: '我的xx'
    }
  }
  ]
}
]

export default new Router({
  routes
})
