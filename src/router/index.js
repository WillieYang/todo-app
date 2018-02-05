import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import TodoApp from '@/components/TodoApp';

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
  ],
});
