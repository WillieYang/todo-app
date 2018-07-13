import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/store/modules/products';
import coin from '@/store/modules/coin';
import theme from '@/store/modules/theme';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    products,
    coin,
    theme,
  },
});

export { store as default };
