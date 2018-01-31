<template>
    <div>
      <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
      <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
      <todo v-for="todo in todos" v-bind:todo="todo" :key="todo.id"></todo>
    </div>
</template>

<script>

import Todo from './Todo';

export default {
  name: 'todo-list',
  props: ['todos'],
  components: {
    Todo,
  },
};
</script>

<style>

</style>
