import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/skillset',
    name: 'Skillset',
    component: () => import('../views/Skillset.vue')
  },



  {
    path: '/roku',
    name: 'Roku',
    component: () => import('../components/Roku.vue')
  },
  {
    path: '/musicmixer',
    name: 'MusicMixer',
    component: () => import('../components/MusicMixer.vue')
  },
  {
    path: '/pizza',
    name: 'Pizza',
    component: () => import('../components/Pizza.vue')
  },
  {
    path: '/mangochat',
    name: 'MangoChat',
    component: () => import('../components/MangoChat.vue')
  },
  {
    path: '/traa',
    name: 'Traa',
    component: () => import('../components/Traa.vue')
  },
  {
    path: '/anastasia',
    name: 'Anastasia',
    component: () => import('../components/Anastasia.vue')
  },
  {
    path: '/hiv',
    name: 'HIV',
    component: () => import('../components/HIV.vue')
  },
  {
    path: '/drumset',
    name: 'Drumset',
    component: () => import('../components/Drumset.vue')
  },
  {
    path: '/texty',
    name: 'Texty',
    component: () => import('../components/Texty.vue')
  },
  {
    path: '/valentines',
    name: 'Valentines',
    component: () => import('../components/Valentines.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
