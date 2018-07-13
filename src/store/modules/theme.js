/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */

const state = {
  themeColour: [],
};

const getters = {
  getColour: (state) => {
    console.log('getters test');
    return state.themeColour;
  },
};

const mutations = {
  setThemeColour: (state, colour) => {
    console.log('mutations test');
    state.themeColour = colour;
  },
};

export default {
  state,
  getters,
  mutations,
};
