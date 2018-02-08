import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import TodoApp from '@/components/TodoApp';
import HomePage from '@/components/HomePage';
import Coins from '@/components/CrytoCoins';
import Coin from '@/components/Coins';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: TodoApp,
    },
    {
      path: '',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/coins',
      name: 'Coins',
      component: Coins,
    },
    {
      path: '/coins/:id',
      name: 'Coin',
      component: Coin,
    },
  ],
});
