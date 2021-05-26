/* eslint-disable camelcase */
interface WeatherDescriptionResponse {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface DailyForecastResponse {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: {
    day: number;
    eve: number;
    morn: number;
    night: number;
  }
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  rain: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    eve: number;
    morn: number;
    night: number;
    max: number;
    min: number;
  }
  uvi: number;
  weather: WeatherDescriptionResponse[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface WeeklyForecastResponse {
  daily: DailyForecastResponse[];
  lat: number;
  lon: number;
  timezone: string;
  // eslint-disable-next-line camelcase
  timezone_offset: number;
}
