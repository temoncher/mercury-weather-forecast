import { City } from '../models/City'
import { ErrorResponse } from './models/ErrorResponse'
import { HistoryResponse } from './models/HistoryResponse'
import { WeeklyForecastResponse } from './models/WeeklyForecastResponse'

class WeatherApi {
  private readonly API_ROOT = 'https://api.openweathermap.org/';

  async fetchWeeklyForecast (city: City): Promise<WeeklyForecastResponse> {
    const url = new URL(`${this.API_ROOT}data/2.5/onecall`)
    const params = new URLSearchParams({
      lat: String(city.latitude),
      lon: String(city.longitude),
      exclude: 'hourly,alerts,minutely,current',
      units: 'metric',
      appid: String(process.env.REACT_APP_WEATHER_API_KEY)
    })

    url.search = params.toString()

    return fetch(url.toString()).then((res) => res.json())
  }

  async fetchHistory (city: City, unixDate: number): Promise<HistoryResponse | ErrorResponse> {
    const url = new URL(`${this.API_ROOT}data/2.5/onecall/timemachine`)
    const params = new URLSearchParams({
      lat: String(city.latitude),
      lon: String(city.longitude),
      dt: String(unixDate),
      units: 'metric',
      appid: String(process.env.REACT_APP_WEATHER_API_KEY)
    })

    url.search = params.toString()

    return fetch(url.toString()).then((res) => res.json())
  }
}

export const weatherApi = new WeatherApi()
