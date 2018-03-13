<template>
  <div>
    <p>Name: {{ coin.name }}</p>
    <p>Symbol: {{ coin.symbol }}</p>
    <p>Price (USD): {{ coin.price_usd }}</p>
  </div>
</template>

<script>
import getCoin from '@/api/getCoin';

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
    fetchData() {
      let coinData = {};
      const that = this;
      getCoin(this.$route.params.id, (data) => {
        console.log(`data: ${JSON.stringify(data)}`);
        coinData = data;
        that.coin = coinData;
      });
      console.log(`res in fetchData: ${JSON.stringify(coinData)}`);
    },
  },
};
</script>

<style scoped>

</style>
