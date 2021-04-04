'use strict';

const state = {
  traffic: [],
};

const getters = {
  GET_TRAFFIC_DATA(state) {
    return state.traffic;
  },
};

const mutations = {
  SET_TRAFFIC_STATE(state, payload) {
    state.traffic = payload;
  },
};

const actions = {
  SET_TRAFFIC({ commit }, payload) {
    commit('SET_TRAFFIC_STATE', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
