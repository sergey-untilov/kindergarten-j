import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'
import Personnel from '@/pages/Personnel'
import Children from '@/pages/Children'
import Parents from '@/pages/Parents'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/personnel', name: 'Personnel', component: Personnel },
    { path: '/children', name: 'Children', component: Children },
    { path: '/parents', name: 'Parents', component: Parents },
  ]
})
