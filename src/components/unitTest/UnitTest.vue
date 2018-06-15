<template>
  <div>
    <div>
      <h1>My To Do List</h1>
      <br/>
      <ul>
        <li v-for="item in listItems" :key="item.id">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'unit-test',
  data() {
    return {
      listItems: ['Mocha', 'Jasmine', 'Cappuccino', 'Chai'],
    };
  },
};
</script>

<style scoped>

</style>
