import { WeatherDescriptionResponse } from './WeatherDescriptionResponse'

/* eslint-disable camelcase */
export interface DailyForecastResponse {
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
