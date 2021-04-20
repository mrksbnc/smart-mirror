interface WeatherResponse {
  coord: { lon: Number; lat: Number };
  weather: Array<WeatherArrayElement>;
  base: String;
  main: {
    temp: Number;
    feels_like: Number;
    temp_min: Number;
    temp_max: Number;
    pressure: Number;
    humidity: Number;
  };
  visibility: Number;
  wind: { speed: Number; deg: Number };
  rain: { '1h': Number };
  clouds: { all: Number };
  dt: String;
  sys: { type: Number; id: Number; country: String; sunrise: String; sunset: String };
  timezone: Number;
  id: Number;
  name: String;
  cod: Number;
}
