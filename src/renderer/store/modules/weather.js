'use strict';

const state = {
  weather: null,
  forecast: null,
};

const getters = {
  GET_WEATHER(state) {
    return state.weather;
  },

  GET_FORECAST(state) {
    return state.forecast;
  },
};

const mutations = {
  SET_CURRENT_STATE(state, payload) {
    state.weather = payload;
  },

  SET_FORECAST_DATA(state, payload) {
    state.forecast = payload;
  },
};

const actions = {
  SET_WEATHER({ commit }, payload) {
    commit('SET_CURRENT_STATE', payload);
  },

  SET_FORECAST({ commit }, payload) {
    commit('SET_FORECAST_DATA', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
