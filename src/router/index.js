import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VariantOne from '../views/Variant1'
import VariantTwo from '../views/Variant2'
import VariantThree from '../views/Variant3'
import OrderListView from '../views/OrderListView'
import OrderOne from '../views/Order1'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/variant1',
    name: 'Variant-one',
    component: VariantOne
  },
  {
    path: '/variant2',
    name: 'Variant-two',
    component: VariantTwo
  },
  {
    path: '/variant3',
    name: 'Variant-three',
    component: VariantThree
  },
  {
    path: '/orderlist',
    name: 'Order-list',
    component: OrderListView
  },
  { 
    path: '/order/:id',
    name: 'Order-one',
    component: OrderOne
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
