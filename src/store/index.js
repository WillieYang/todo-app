import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/store/modules/products';
import coin from '@/store/modules/coin';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    products,
    coin,
  },
});

export { store as default };
