/**
 * 路由器对象模块
 */
import Vue from 'vue'
import Router from 'vue-router'
import MSite from '@/pages/MSite/MSite.vue'
import Search from '@/pages/Search/Search.vue'
import Order from '@/pages/Order/Order.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Login from '@/pages/Login/Login.vue'

/**
 * 声明使用插件
 */
Vue.use(Router)

export default new Router({
  /** 所有路由 */
  routes: [
    {
      path: '/msite',
      name: 'msite',
      component: MSite,
      /**
       * meta需要配置成对象，在该对象中加一个标识属性，
       * 再给标识属性一个值（布尔类型）
       * 
       * 与App.vue中的引入
       * 
       * 注：meta默认就有，但只是一个空对象，一个空对象取一个属性值为false
       */
      meta:{
        showFooter: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    /**设置默认路由 */
    {
      path: '/',
      redirect: '/msite'
    },
  ]
})
