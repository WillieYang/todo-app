/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [
      { name: 'Banana Skin', price: 20 },
      { name: 'Shiny Star', price: 40 },
      { name: 'Green Shells', price: 60 },
      { name: 'Red Shells', price: 80 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      const saleProducts = state.products.map((product) => {
        return {
          name: `** ${product.name} **`,
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
});

export { store as default };
