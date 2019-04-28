import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../components/Layout/Layout.vue'

import Login from '../components/Login'
import Nopage from '../components/404'

import Home from '../components/Home/Index'

import ProductEdit from '../components/Product/ProductEdit'
import ProductList from '../components/Product/ProductList'
import ProductCreate from '../views/Product/Create'

import OrderList from '../views/Order/OrderList'
import OrderDetail from '../views/Order/OrderDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/404', 
      component: Nopage,
      name: 'NoPage',
      meta: {
        requireAuth: true,
       }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        NoNeedHome: true
      }
    },
    {
      path: '/Home/Index',
      name: '首页',
      component: Home,
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/',
      name: '产品首页',
      component:Layout,
      children: [
        {
          path: '/Product/ProductList',
          component: ProductList,
          name: '产品列表',
          meta: {
            requireAuth: true,
          }
        },
        {
          path: '/Product/ProductEdit',
          component: ProductEdit,
          name: '产品编辑',
          meta: {
            requireAuth: true,
          }
        },
        {
          path: '/Product/Create',
          component: ProductCreate,
          name: '上传产品',
          meta: {
            requireAuth: true,
          }
        }
      ]
    },
    {
      path: '/',
      name: '订单首页',
      component: Layout,
      children: [
        {
          path: '/Order',
          component: OrderList,
          name: '订单列表',
          meta: {
            requireAuth: true,
          }
        },
        {
          path: '/Order/Edit',
          component: OrderDetail,
          name: '订单编辑',
          meta: {
            requireAuth: true,
          }
        }
      ]
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }

  ]
})
