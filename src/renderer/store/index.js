import Vue from 'vue';
import Vuex from 'vuex';
import loading from './modules/loading';
import weather from './modules/weather';
import traffic from './modules/traffic';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    weather,
    loading,
    traffic,
  },
  plugins: [],
});

export default store;
