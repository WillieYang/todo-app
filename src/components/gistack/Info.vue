<template>
  <div>
    <h1>Info {{ info }}</h1>
    <b-button @click="getInfo" variant="danger">Click</b-button>
    <b-button @click="saveData" variant="danger">Storage</b-button>
  </div>
</template>

<script>
export default {
  name: 'info',
  data() {
    return {
      info: {},
    };
  },
  methods: {
    getInfo() {
      const API = 'http://192.168.199.231:8888/gistack-producer/gcloud/sytem/info';
      this.$axios({
        method: 'get',
        url: API,
      }).then((response) => {
        console.log(response);
        this.info = response;
      }).catch((error) => {
        console.log(error);
      });
    },
    saveData() {
      localStorage.setItem('Test', 'life');
    },
  },
};
</script>

<style scoped>

</style>
