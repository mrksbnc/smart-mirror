import Vue from 'vue';
import Vuex from 'vuex';
import email from './modules/email';
import loading from './modules/loading';
import weather from './modules/weather';
import traffic from './modules/traffic';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    email,
    weather,
    loading,
    traffic,
  },
  plugins: [],
});

export default store;
