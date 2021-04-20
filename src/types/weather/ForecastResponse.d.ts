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
