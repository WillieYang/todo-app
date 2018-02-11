<template>
  <div id="product-list">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
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
};
</script>

<style scoped>
</style>
