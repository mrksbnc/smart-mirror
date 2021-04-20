# smart-mirror

> The 2nd version of my DIY smart mirror project

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run start
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

> First rename sample.config.js to config.js in src/config folder then provide the necessary values and api keys
> This Project requires openWeatherMap, here developer api apiKey by defaut. Pleas note that IMAP login may require
> generated app password in case two factor auth is enabled

```javascript
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
```
