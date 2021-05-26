import { City } from '../models/City'
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
}

export const weatherApi = new WeatherApi()
