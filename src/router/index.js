import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Shop from '../views/Shop.vue'
import Category from '../views/Category.vue'

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
    component: About
  },
  {
    path: '/new-collection',
    name: 'New Collection',
    component: Shop
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category
  },
  {
    path: '/men',
    name: 'Men',
    id:'men'
  },
  {
    path: '/women',
    name: 'Women',
    id:'women'
  },
  {
    path: '/tanks',
    name: 'Tanks',
    id:'tanks'
  },
  {
    path: '/hoddies',
    name: 'Hoddies',
    id:'hoddies'
  }
]

const router = new VueRouter({
  routes
})

export default router
