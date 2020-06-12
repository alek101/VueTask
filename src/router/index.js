import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import UserDetail from '../views/UserDetail.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/user/:id',
    name: 'UserDetail',
    props: true,
    component: UserDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
