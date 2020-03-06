import Vue from 'vue'
import Router from 'vue-router'
import ContainerCommon from './views/components/container/container-common'
import ContainerMap from './views/components/container/container-map'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ContainerMap
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/test1',
      name: 'home',
      component: ContainerCommon
    },
    {
      path: '/test2',
      name: 'home',
      component: ContainerMap
    }
  ]
})
