interface ForeacastResponse {
  lat: Number;
  lon: Number;
  timezone: String;
  timezone_offset: Number;
  current: {
    dt: String;
    sunrise: String;
    sunset: String;
    temp: Number;
    feels_like: Number;
    pressure: Number;
    humidity: Number;
    dew_point: Number;
    uvi: Number;
    clouds: Number;
    visibility: Number;
    wind_speed: Number;
    wind_deg: Number;
    weather: Array<WeatherArrayElement>;
    rain: { '1h': Number };
  };
  minutely: Array<MinutelyModel>;
  hourly: Array<HourlyModel>;
  daily: Array<DailyModel>;
  alerts: Array<AlertModel>;
}

interface WeatherArrayElement {
  id: Number;
  main: String;
  description: String;
  icon: String;
}

interface MinutelyModel {
  dt: String;
  precipitation: Number;
}

interface HourlyModel {
  dt: String;
  temp: Number;
  feels_like: Number;
  pressure: Number;
  humidity: Number;
  dew_point: Number;
  uvi: Number;
  clouds: Number;
  visibility: Number;
  wind_speed: Number;
  wind_deg: Number;
  wind_gust: Number;
  weather: Array<WeatherArrayElement>;
  pop: Number;
  rain: { '1h': Number };
}

interface DailyModel {
  dt: Number;
  sunrise: Number;
  sunset: Number;
  moonrise: Number;
  moonset: Number;
  moon_phase: Number;
  temp: { day: Number; min: Number; max: Number; night: Number; eve: Number; morn: Number };
  feels_like: { day: Number; night: Number; eve: Number; morn: Number };
  pressure: Number;
  humidity: Number;
  dew_point: Number;
  wind_speed: Number;
  wind_deg: Number;
  wind_gust: Number;
  weather: Array<WeatherArrayElement>;
  clouds: Number;
  pop: Number;
  rain: Number;
  uvi: Number;
}

interface AlertModel {
  sender_name: String;
  event: String;
  start: String;
  end: String;
  description: String;
}
