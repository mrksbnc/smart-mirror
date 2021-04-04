'use strict';

const state = {
  isLoading: false,
};

const getters = {
  GET_LOADING_STATE(state) {
    return state.isLoading;
  },
};

const mutations = {
  SET_LOADING_STATE(state, payload) {
    state.isLoading = payload;
  },
};

const actions = {
  SET_LOADING({ commit }, payload) {
    commit('SET_LOADING_STATE', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
