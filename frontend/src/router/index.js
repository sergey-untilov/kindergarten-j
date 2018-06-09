import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'Home', component: () => import('@/pages/Home')},
        {path: '/dashboard', name: 'Dashboard', component: () => import('@/pages/Dashboard')},
        {path: '/personnel', name: 'Personnel', component: () => import('@/pages/Personnel')},
        {path: '/children', name: 'Children', component: () => import('@/pages/Children')},
        {path: '/parents', name: 'Parents', component: () => import('@/pages/Parents')},
        {path: '/login', name: 'login', component: () => import('@/pages/Login')},
        {path: '/register', name: 'register', component: () => import('@/pages/Register')},
    ]
})
