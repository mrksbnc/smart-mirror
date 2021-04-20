'use strict';

import axios from 'axios';
import store from '../store';
import { weather } from '../config/config';
import WeatherIconEnum from '../data/weatherIconEnum';
// import { IsOnSameDay } from '../utils/datetime';
/**
 * @description This class encapsulates all Weather related logic in
 * this application
 */
class WeatherFunctions {
  /**
   * @param {object} store
   * @param {string} city
   * @param {string} apiKey
   * @param {string} latitude
   * @param {string} longitude
   */
  constructor(store, city, apiKey, baseUrl, latitude, longitude) {
    this.store = store;
    this.city = city;
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.latitude = latitude;
    this.longitude = longitude;
  }
  /**
   * @description Sends a properly formatted GET request then returns the
   * current weather.
   * @returns {Promise<JSON>} Promise object which represents the server response
   */
  async GetWeather() {
    const url = this.baseUrl + `/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`;
    const response = await axios.get(url);
    return response;
  }
  /**
   * @description Sends a properly formatted GET request then returns the
   * forecast.
   * @returns {Promise<JSON>} Promise object which represents the server response
   */
  async GetForecast() {
    const url =
      this.baseUrl +
      `/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&units=metric&appid=${this.apiKey}`;
    console.log(url);
    const response = await axios.get(url);
    return response;
  }
  /**
   * @description Creates a new object from response data then dispatches an
   * action to set data into state
   * @param {object} response
   * @returns {void}
   */
  CreateWeatherStateDataFromResponse(response) {
    if (!response) return null;
    let weatherState = {};
    const windData = response.data.wind;
    const weatherData = response.data.main;
    const weatherDescription = response.data.weather[0];
    weatherState.city = response.data.name;
    weatherState.icon = this.ConvertWeatherIdToIcon(weatherDescription.icon);
    weatherState.windSpeed = windData.speed;
    weatherState.minimumTemperature = weatherData.temp_min;
    weatherState.maximumTemperature = weatherData.temp_max;
    weatherState.currentTemperature = weatherData.temp;
    weatherState.weatherDescription = weatherDescription.description;
    weatherState.temperatureFeelsLike = weatherData.feels_like;
    this.store.dispatch('weather/SET_WEATHER', weatherState);
    return void 0;
  }
  /**
   * @description Creates a new list from response data then dispatches an
   * action to set data into state
   * @param {object} response
   * @returns {void}
   */
  CreateForecastStateDataFromResponse(response) {
    let forecastState = [];
    console.log(response);
    const dailyForecast = response.data.daily;
    if (!Array.isArray(dailyForecast)) return;
    forecastState = dailyForecast.map((m, i) => {
      if (i == 0) return;
      const weatherDescription = m.weather[0];
      return {
        icon: this.ConvertWeatherIdToIcon(weatherDescription.icon),
        minimumTemperature: m.temp.min,
        maximumTemperature: m.temp.max,
        weatherDescription: weatherDescription.description,
        temperatureFeelsLike: m.feels_like.day,
        windSpeed: m.wind_speed,
        date: m.dt,
      };
    });
    forecastState = forecastState.filter(Boolean);
    return this.store.dispatch('weather/SET_FORECAST', forecastState);
  }
  /**
   * @description Mathes parameter with iconEnum. If the given argument exists
   * in given enum the icon class will be returned.
   * @param {string} openWeatherId
   * @returns {string | null}
   */
  ConvertWeatherIdToIcon(openWeatherId) {
    if (!openWeatherId) return null;
    return WeatherIconEnum[openWeatherId] || null;
  }
  /**
   * @description Awaits api response then dispatches weather/SET_WEATHER
   * to set data into vuex's weather state
   * @returns {void}
   */
  async SetCurrentWeatherState() {
    const response = await this.GetWeather();
    this.CreateWeatherStateDataFromResponse(response);
  }
  /**
   * @description Awaits api response then dispatches weather/SET_FORECAST
   * to set data into vuex's forecast state
   * @returns {void}
   */
  async SetForecastState() {
    const response = await this.GetForecast();
    this.CreateForecastStateDataFromResponse(response);
  }
}
let instance = new WeatherFunctions(
  store,
  weather.location.city,
  weather.api.apiKey,
  weather.api.baseURL,
  weather.location.latitude,
  weather.location.longitude
);
export { instance as weatherFunctions };
