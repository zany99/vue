import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../components/Main.vue'
import Load from '../components/Load.vue'
import Signup from '../components/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/Main.vue')
    }
  },
  {
    path: '/load',
    name: 'Load',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/Load.vue')
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/Signup.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
