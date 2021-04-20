<template>
  <div class="d-flex forecast-block justify-space-between">
    <div v-for="(day, index) in forecastState" :key="index" class="d-flex flex-column day-block">
      <span>{{ GetFormttedDayname(day.date) }}</span>
      <WeatherIcon :icon="day.icon" class="mr-2 fw-icon" />
      <div class="temp-block d-flex mt-1 mb-1">
        <div class="number-with-icon">
          <span>{{ CreateFormattedTemperature(day.minimumTemperature) }}</span>
          <WeatherIcon icon="celsius" class="mr-2 tmp-icon" />
        </div>
        <div class="number-with-icon">
          <span>{{ CreateFormattedTemperature(day.maximumTemperature) }}</span>
          <WeatherIcon icon="celsius" class="tmp-icon" />
        </div>
      </div>
      <!-- <span>{{ CreateFormattedWeatherDescription(day.weatherDescription) }}</span> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { PascalCase } from '../../../utils/string';
import { dateTimeFunctions } from '../../../core/DateTimeFunctions';

export default {
  name: 'Forecast',
  computed: {
    ...mapGetters({
      forecastState: 'weather/GET_FORECAST',
    }),
  },
  methods: {
    GetFormttedDayname(date) {
      let dt = new Date(date * 1000);
      return dateTimeFunctions.GetDayNameFromParam(dt).slice(0, 3);
    },
    CreateFormattedTemperature(temperature) {
      return parseInt(temperature).toString();
    },
    CreateFormattedWeatherDescription(str) {
      return PascalCase(str);
    },
  },
};
</script>

<style></style>
