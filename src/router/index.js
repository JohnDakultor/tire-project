import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/brand',
    name: 'brand',
     component: () => import(/* webpackChunkName: "brand" */ '../views/BrandView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
     component: () => import(/* webpackChunkName: "shop" */ '../views/ShopView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
     component: () => import(/* webpackChunkName: "cart" */ '../views/AddToCartView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
