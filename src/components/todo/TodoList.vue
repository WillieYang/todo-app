<template>
    <div>
      <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
      <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
      <todo
        v-on:delete-todo="deleteTodo" v-for="todo in todos" v-bind:todo="todo" :key="todo.id"
        v-on:complete-todo="completeTodo" v-on:incomplete-todo="incompleteTodo">
      </todo>
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
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    },
    incompleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = false;
    },
  },
};
</script>

<style>

</style>
