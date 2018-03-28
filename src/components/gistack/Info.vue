<template>
  <div>
    <h1>Info {{ info }}</h1>
    <b-button @click="getInfo" variant="danger">Click</b-button>
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
      setInterval(() => {
        this.$axios.get('http://zhuanti.3snews.net/index.php?m=wgdcpxvote&c=index&a=vote&ids=23')
          .then((response) => {
            console.log(response);
            this.info = response;
          });
      }, (Math.floor(Math.random() * 50) + 1) * 1000);
    },
  },
};
</script>

<style scoped>

</style>
