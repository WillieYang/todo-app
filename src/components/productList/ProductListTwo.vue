<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'product-list-two',
  computed: {
    products() {
      console.log(`Product List Two:${JSON.stringify(this.$store.state.products.products)}`);
      return this.$store.state.products.products;
    },
  },
};
</script>

<style scoped>

</style>
