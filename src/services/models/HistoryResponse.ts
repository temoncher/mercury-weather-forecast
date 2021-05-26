/* eslint-disable camelcase */
import { DailyForecastResponse } from './DailyForecastResponse'
import { WeatherDescriptionResponse } from './WeatherDescriptionResponse'

type HourlyForecastResponse = Pick<
  DailyForecastResponse,
  | 'clouds'
  | 'dew_point'
  | 'dt'
  | 'feels_like'
  | 'humidity'
  | 'pressure'
  | 'weather'
  | 'wind_deg'
  | 'wind_speed'
> & {
  temp: number;
  visibility: number
}

type HistoryCurrentResponse = HourlyForecastResponse & Pick<DailyForecastResponse, 'sunrise' | 'sunset'>

export interface HistoryResponse {
  current: HistoryCurrentResponse;
  hourly: HourlyForecastResponse[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: string;
}
