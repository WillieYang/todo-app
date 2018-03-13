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
      const tmp = getCoin(this.$route.params.id, (data) => {
        console.log(`Data inside the function: ${JSON.stringify(data)}`);
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
