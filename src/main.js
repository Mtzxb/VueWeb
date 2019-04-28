// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import echarts from 'echarts'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts 

var storeTemp = store;
router.beforeEach((to, from, next) => {
  {

    if (to.meta.title) {
      document.title = to.meta.title
    }
    if (to.meta.requireAuth) {
      // 判断该路由是否需要登录权限
      if (storeTemp.state.token && storeTemp.state.token != "undefined") {
        // 通过vuex state获取当前的token是否存在
        next();
      } else {
        // store.commit("saveToken", "");
        // store.commit("saveTokenExpire", "");
        // store.commit("saveTagsData", "");
        // window.localStorage.removeItem('user');
        // window.localStorage.removeItem('NavigationBar');
        // window.localStorage.removeItem('router');
        console.log('com--2222')
        next({
          path: "/login",
          query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        });
      }
    } else {
      next();
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
