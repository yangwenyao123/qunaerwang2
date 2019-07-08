import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import City from '@/pages/City/City'
import Details from '@/pages/details/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x:0,y:0}
  }
})
