import * as React from 'react'
import './WeekForecast.scss'
import ForecastPlaceholder from '../components/ForecastPlaceholder'
import Select from '../components/Select'
import Option from '../components/Option'
import { cities } from '../constants'
import WeatherCarousel from '../components/WeatherCarousel'
import { DailyForecast } from '../models/DailyForecast'
import { City } from '../models/City'
import { WeatherApiContext } from '../contexts/webApiContext'
import { isErrorResponse } from '../services/models/ErrorResponse'

const WeekForecast: React.FC = () => {
  const [chosenCityId, setChosenCityId] = React.useState<string | undefined>(undefined)
  const [dailies, setDailies] = React.useState<DailyForecast[]>([])
  const chosenCity = React.useMemo(() => cities.find((city) => city.id === chosenCityId), [chosenCityId])
  const weatherApi = React.useContext(WeatherApiContext)

  React.useEffect(() => {
    const fetchDailies = async (chosenCity: City): Promise<DailyForecast[]> => {
      if (!weatherApi) throw new Error('Weather api is not available')

      const weeklyForecastResponse = await weatherApi.fetchWeeklyForecast(chosenCity)

      if (isErrorResponse(weeklyForecastResponse)) throw new Error('Request failed')

      return weeklyForecastResponse.daily.map((daily) => ({
        temperature: daily.temp.day,
        date: daily.dt,
        icon: daily.weather[0].icon
      }))
    }

    if (chosenCity) {
      fetchDailies(chosenCity)
        .then((fetchedDailies) => setDailies(fetchedDailies))
    }
  }, [chosenCity, weatherApi])

  const preventRefresh = (event: React.KeyboardEvent<HTMLFormElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  return (
    <section className="week-forecast paper">
      <h2 className="paper__header">7 day forecast</h2>
      <div className="paper__content">
        <form className="week-forecast__select-container" onKeyDown={preventRefresh}>
          <Select
            placeholder="Select city"
            value={chosenCity?.id ?? ''}
            label={chosenCity?.name}
            onOptionClick={(cityId) => setChosenCityId(cityId)}
          >
            {cities.map((city) => <Option key={city.id} value={city.id}>{city.name}</Option>)}
          </Select>
        </form>
        {dailies.length > 0 ? <WeatherCarousel dailies={dailies} /> : <ForecastPlaceholder />}
      </div>
    </section>
  )
}

export default WeekForecast
