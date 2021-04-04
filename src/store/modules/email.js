'use strict';

const state = {
  emails: [],
};

const getters = {
  GET_MAILS(state) {
    return state.emails;
  },
};

const mutations = {
  SET_EMAIL_STATE(state, payload) {
    state.emails = payload;
  },
};

const actions = {
  SET_EMAILS({ commit }, payload) {
    commit('SET_EMAIL_STATE', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
