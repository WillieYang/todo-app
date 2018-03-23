<template>
  <div>
    <p>Name: {{ coin.name }}</p>
    <p>Symbol: {{ coin.symbol }}</p>
    <p>Price (USD): {{ coin.price_usd }}</p>
  </div>
</template>

<script>
// import getCoin from '@/api/getCoin';
import axiosGet from '@/api/config_sdk/get_sdk';

export default {
  name: 'coins',
  data() {
    return {
      coin: {},
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData',
  },
  methods: {
    async fetchData() {
      // let coinData = {};
      const res = await axiosGet(this.$route.params.id);
      console.log(`Async and Await Trying: ${res}`);
      this.coin = res.data[0];
      console.log(`this: ${JSON.stringify(this.coin)}`);
    },
  },
};
</script>

<style scoped>

</style>
