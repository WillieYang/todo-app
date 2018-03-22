import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/store/modules/products';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    products,
  },
});

export { store as default };
