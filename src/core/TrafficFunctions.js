'use strict';

import axios from 'axios';
import store from '../store';
import { traffic } from '../config/config';

/**
 * @description This class encapsulates all transport and map related logic in
 * this application
 */
class TrafficFunctions {
  /**
   * @param {object} store
   * @param {string} apiKey
   * @param {string} baseUrl
   * @param {object} origin
   * @param {string} origin.latitude
   * @param {string} origin.longitude
   * @param {object} destination
   * @param {string} destination.latitude
   * @param {string} destination.longitude
   */
  constructor(store, apiKey, baseUrl, origin, destination) {
    this.store = store;
    this.apiKey = apiKey;
    this.baseURL = baseUrl;
    this.origin = origin;
    this.destination = destination;
  }
  /**
   * @description Sends a propery formatted GET request for HERE API
   * @param {string} transportMode
   * @returns {Promise<TrafficResponse>} response
   */
  async GetTraffic(transportMode) {
    const url =
      this.baseURL +
      `/routes?transportMode=${transportMode}&origin=${this.origin.latitude},${this.origin.longitude}&destination=${this.destination.latitude},${this.destination.longitude}&apiKey=${this.apiKey}`;
    const response = await axios.get(url);
    return response;
  }
  /**
   * @description Iterates over on travel modes from config.js. In every
   * iteration it executes GetTraffic with a different transport mode.
   * Afterwards result stored in a new Array then set to vuex store
   * @returns {Promise<void>}
   */
  async GetTrafficByMultipleTravelMode() {
    let responseList = [];
    for (const mode of traffic.travelModes) {
      const response = await this.GetTraffic(mode);
      responseList.push(response?.data?.routes[0]?.sections[0]);
    }
    this.CreateTrafficStateFromResponseList(responseList);
    return void 0;
  }
  /**
   * @description Creates a new array of objects from forecast response
   * Result list stored in vuex store
   * @param {Array<Section>} list
   * @returns {void}
   */
  CreateTrafficStateFromResponseList(list) {
    if (!list || !Array.isArray(list)) return;
    let result = list.map(m => {
      return {
        type: m?.transport?.mode,
        departureTime: m?.departure?.time,
        arrivalTime: m?.arrival?.time,
      };
    });
    this.store.dispatch('traffic/SET_TRAFFIC', result);
    return void 0;
  }
}

let instance = new TrafficFunctions(
  store,
  traffic.api.apiKey,
  traffic.api.baseURL,
  traffic.location.origin,
  traffic.location.destination
);
export { instance as trafficFunctions };
