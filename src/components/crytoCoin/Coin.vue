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
      const tmp = getCoin(this.$route.params.id, (data) => {
        coinData = data;
        console.log(`coinData inside the function: ${JSON.stringify(coinData)}`);
        that.coin = coinData;
        const getValue = () => data;
        getValue();
      });
      this.coin = tmp.getValue;
    },
  },
};
</script>

<style scoped>

</style>
