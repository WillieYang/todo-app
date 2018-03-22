/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */

const state = {
  products: [
    { name: 'Banana Skin', price: 20 },
    { name: 'Shiny Star', price: 40 },
    { name: 'Green Shells', price: 60 },
    { name: 'Red Shells', price: 80 },
  ],
};

const getters = {
  saleProducts: (state) => {
    const saleProducts = state.products.map((product) => {
      return {
        name: `** ${product.name} **`,
        price: product.price / 2,
      };
    });
    return saleProducts;
  },
};

const mutations = {
  reducePrice: (state, payload) => {
    state.products.forEach((product) => {
      product.price -= payload;
    });
  },
};

const actions = {
  reducePrice: (context, payload) => {
    setTimeout(() => {
      context.commit('reducePrice', payload);
    }, 2000);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

