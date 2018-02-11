<template>
  <div id="product-list">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './ProductListOne';
import ProductListTwo from './ProductListTwo';

export default {
  components: {
    ProductListOne,
    ProductListTwo,
  },
  name: 'product-list',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
</style>
