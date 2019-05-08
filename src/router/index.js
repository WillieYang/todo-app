import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
// import TodoApp from '@/components/todo/TodoApp';
// import HomePage from '@/components/HomePage';
// import Coins from '@/components/crytoCoin/CrytoCoins';
// import Coin from '@/components/crytoCoin/Coin';
// import ProductList from '@/components/productList/ProductList';
// import SignUp from '@/components/Authentication/SignUp';
// import ECharts from '@/components/eCharts/ECharts';
// import Info from '@/components/gistack/Info';
// import SocketIO from '@/components/socketIO/SocketChat';
// import UnitTest from '@/components/unitTest/UnitTest';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: () => import('@/components/HelloWorld'),
    },
    {
      path: '/todo',
      name: 'Todo',
      component: () => import('@/components/todo/TodoApp'),
    },
    {
      path: '',
      name: 'Home',
      component: () => import('@/components/HomePage'),
    },
    {
      path: '/coins',
      name: 'Coins',
      component: () => import('@/components/crytoCoin/CrytoCoins'),
    },
    {
      path: '/coins/:id',
      name: 'Coin',
      component: () => import('@/components/crytoCoin/Coin'),
    },
    {
      path: '/productList',
      name: 'ProductList',
      component: () => import('@/components/productList/ProductList'),
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: () => import('@/components/Authentication/SignUp'),
    },
    {
      path: '/echarts',
      name: 'ECharts',
      component: () => import('@/components/eCharts/ECharts'),
    },
    {
      path: '/info',
      name: 'GistackInfo',
      component: () => import('@/components/gistack/Info'),
    },
    {
      path: '/socketIO',
      name: 'SocketIO',
      component: () => import('@/components/socketIO/SocketChat'),
    },
    {
      path: '/unitTest',
      name: 'unitTest',
      component: () => import('@/components/unitTest/UnitTest'),
    },
  ],
});
