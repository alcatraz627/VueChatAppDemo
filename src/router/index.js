import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Chat from '../views/Chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat

  }
]

const router = new VueRouter({
  routes
})

export default router
