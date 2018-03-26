/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */

import axiosGet from '@/api/config_sdk/get_sdk';

const state = {
  coin: [],
};

const getters = {
  getCoin: (state) => {
    return state.coin;
  },
};

const mutations = {
  axiosCoin: (state, res) => {
    state.coin = res.data[0];
  },
};

const actions = {
  async axiosCoin(context, payload) {
    context.commit('axiosCoin', await axiosGet(payload));
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
