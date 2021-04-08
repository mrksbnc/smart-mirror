<template>
  <div class="weather-wrapper">
    <div class="d-flex">
      <span>{{ temperature }}</span>
      <WeatherIcon icon="celsius" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Weather',
  computed: {
    ...mapGetters({
      weatherState: 'weather/GET_WEATHER',
    }),
    city: function() {
      return this.weatherState?.city;
    },
    temperature: function() {
      return this.weatherState?.currentTemperature;
    },
    icon: function() {
      return this.weatherState?.icon;
    },
    maximumTemperature: function() {
      return this.weatherState?.maximumTemperature;
    },
    minimumTemperature: function() {
      return this.weatherState?.minimumTemperature;
    },
    temperatureFeelsLike: function() {
      return this.weatherState?.temperatureFeelsLike;
    },
    weatherDescription: function() {
      return this.weatherState?.weatherDescription;
    },
    windSpeed: function() {
      return this.weatherState?.windSpeed;
    },
  },
};
</script>

<style></style>
