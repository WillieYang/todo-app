<template>
  <div>
    <h1>Info {{ info }}</h1>
    <h1>Storage {{ storage }}</h1>
    <b-button @click="getInfo" variant="danger">Click</b-button>
    <b-button @click="saveData" variant="danger">Set Storage</b-button>
    <b-button @click="getData" variant="danger">get Storage</b-button>
    <b-button @click="cleanData" variant="danger">clean Storage</b-button>
  </div>
</template>

<script>
export default {
  name: 'info',
  data() {
    return {
      info: {},
      storage: {},
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
      sessionStorage.setItem('Test', 'life');
    },
    cleanData() {
      sessionStorage.removeItem('Test');
      this.storage = sessionStorage.getItem('Test');
    },
    getData() {
      this.storage = sessionStorage.getItem('Test');
    },
  },
};
</script>

<style scoped>

</style>
