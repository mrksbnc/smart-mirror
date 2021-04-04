'use strict';

export const weather = Object.freeze({
  location: {
    city: null,
    latitude: null,
    longitude: null,
  },
  api: {
    apiKey: null,
    baseURL: 'http://api.openweathermap.org',
  },
});

export const traffic = Object.freeze({
  location: {
    origin: {
      latitude: null,
      longitude: null,
    },
    destination: {
      latitude: null,
      longitude: null,
    },
    originAlias: null,
    destinationAlias: null,
    defaultOriginAlias: 'Home',
    defaultDestinationAlias: 'Work',
  },
  travelModes: ['car', 'pedestrian', 'bus'],
  api: {
    apiKey: null,
    baseURL: 'https://router.hereapi.com/v8',
  },
});

export const email = Object.freeze({
  imap: {
    user: null,
    password: null,
    host: null,
    port: null,
    tls: null,
    authTimeout: null,
  },
});
