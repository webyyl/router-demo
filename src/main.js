// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Indexpage from './pages/index.vue'
import Detail from './pages/detail.vue'
import OrderList from './pages/orderList'
import DeAnalysis from './pages/detail/analysis.vue'
import DeCount from './pages/detail/count.vue'
import DeForecast from './pages/detail/forecast.vue'
import DePublish from './pages/detail/publish.vue'

Vue.use(VueResource);
Vue.use(VueRouter);
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Indexpage
    },
    {
      path: '/orderlist',
      component: OrderList
    },
    {
      path: '/detail',
      component: Detail,
      children:[
        {
          path: 'analysis',
          component: DeAnalysis
        },
        {
          path: 'count',
          component: DeCount
        },
        {
          path: 'forecast',
          component: DeForecast
        },
        {
          path: 'publish',
          component: DePublish
        }
      ]
    },
  ]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
