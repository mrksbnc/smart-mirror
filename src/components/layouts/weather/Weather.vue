<template>
  <div class="d-flex weather-block">
    <div class="d-flex">
      <div class="weather-status-with-temperature">
        <span>{{ temperature }}</span>
        <WeatherIcon icon="celsius" class="mr-2" />
      </div>
      <WeatherIcon class="weather-icon" :icon="icon" />
    </div>
    <div class="weather-props-div">
      <div class="feels-like-div">
        <span>Feels like {{ temperature }}</span>
        <WeatherIcon icon="celsius" />
      </div>
      <div class="min-and-max-temp-div">
        <span class="minimum-temp mr-2">
          <WeatherIcon icon="thermometer-exterior" class="mr-1" />
          <span>{{ minimumTemperature }}</span>
          <WeatherIcon icon="celsius" />
        </span>
        <span class="maximum-temp">
          <WeatherIcon icon="thermometer" class="mr-1" />
          {{ maximumTemperature }}
          <WeatherIcon icon="celsius" />
        </span>
      </div>
      <div class="wind">
        <i class="fas fa-wind mr-1"></i>
        <span>{{ windSpeed }} Km/h</span>
      </div>
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
      return parseInt(this.weatherState?.currentTemperature);
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

<style scoped>
.weather-block {
  flex-direction: column;
  align-items: flex-end;
  margin-right: 30px;
  margin-top: 30px;
}

.weather-status-with-temperature {
  font-size: 50px;
  padding-left: 20px;
}

.weather-icon {
  font-size: 90px;
}

.weather-props-div {
  display: flex;
  margin-top: 30px;
  font-size: 1.1rem;
  align-items: flex-end;
  flex-direction: column;
}

.weather-info-div {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.main-info-txt-div {
  font-size: 50px;
  padding-left: 20px;
}

.wind {
  display: flex;
  align-items: center;
}

.min-and-max-temp-div {
  margin-top: 5px;
}

.weather-props-div {
  align-items: baseline;
}

.feels-like-div {
  margin-bottom: 10px;
}

.min-and-max-temp-div {
  margin-bottom: 10px;
}
</style>
