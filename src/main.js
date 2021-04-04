import '@babel/polyfill';
import 'mutationobserver-shim';

import Vue from 'vue';
import App from './App.vue';
import store from './store';

import './components';
import './style/loader.scss';
import './style/smart-mirror.scss';
import './plugins/bootstrap-vue';

import { helperFunctions } from './core/HelperFunctions';
import { trafficFunctions } from './core/TrafficFunctions';
// import { weatherFunctions } from './core/WeatherFunctions';
import { errorBox, warningBox, successBox } from './data/cssConsoleProperties';

Vue.config.productionTip = false;

new Vue({
  store,
  async created() {
    window.ipc.on('GET_MAILS', payload => {
      let normalizedPayload = helperFunctions.CreateNormalizedPayloadForEmail(payload);
      this.$store.dispatch('email/SET_EMAILS', normalizedPayload);
    });
    this.$store.dispatch('loading/SET_LOADING', true);
    await InitApp(this.$store);
    UpdateApp();
    this.$store.dispatch('loading/SET_LOADING', false);
  },
  render: h => h(App),
}).$mount('#app');

async function InitApp() {
  try {
    console.log('%c[Smart Mirror] App init started', warningBox);
    window.ipc.send('GET_MAILS');
    // await weatherFunctions.SetForecastState();
    // await weatherFunctions.SetCurrentWeatherState();
    await trafficFunctions.GetTrafficByMultipleTravelMode();
    console.log('%c[Smart Mirror] App startup complete', successBox);
  } catch (error) {
    console.log(`%c[Smart Mirror] App startup failed!\t${error.message}`, errorBox);
    process.exit(1);
  }
}

async function UpdateApp() {
  window.setInterval(async () => {
    window.ipc.send('GET_MAILS');
    // await weatherFunctions.SetForecastState();
    // await weatherFunctions.SetCurrentWeatherState();
    await trafficFunctions.GetTrafficByMultipleTravelMode(this.$store);
  }, 1800000);
}
