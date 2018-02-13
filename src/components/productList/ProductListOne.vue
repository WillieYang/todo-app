<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product.id">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>
    <button v-on:click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>
/**
 * @param {{$store:string}} data
 */
import { mapGetters, mapActions } from 'vuex';
// import mapActions from 'vuex';

export default {
  name: 'product-list-one',
  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters([
      'saleProducts',
    ]),
  },
  methods: {
    ...mapActions([
      'reducePrice',
    ]),
  },
};
</script>

<style scoped>

</style>
