/* eslint-disable camelcase */
import { DailyForecastResponse } from './DailyForecastResponse'

export interface WeeklyForecastResponse {
  daily: DailyForecastResponse[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}
