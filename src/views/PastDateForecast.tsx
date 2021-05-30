import * as React from 'react'
import './PastDateForecast.scss'
import ForecastPlaceholder from '../components/ForecastPlaceholder'
import Select from '../components/Select'
import DatePicker from '../components/DatePicker'
import Option from '../components/Option'
import WeatherCard from '../components/WeatherCard'
import { cities } from '../constants'
import { DailyForecast } from '../models/DailyForecast'
import { weatherApi } from '../services/WeatherApi'
import { dateToISO, dateToUnix, isISODateValid, subtractDays } from '../utils/date'
import { isErrorResponse } from '../services/models/ErrorResponse'

const validateDate = (date: string, min: string, max: string): boolean => isISODateValid(date) && date >= min && date <= max

const PastDateForecast: React.FC = () => {
  const [chosenCityId, setChosenCityId] = React.useState<string | undefined>(undefined)
  const [date, setDate] = React.useState('')
  const [forecast, setForecast] = React.useState<DailyForecast | undefined>(undefined)
  const chosenCity = React.useMemo(() => cities.find((city) => city.id === chosenCityId), [chosenCityId])

  const minDate = React.useMemo(() => dateToISO(subtractDays(new Date(), 5)), [])
  const maxDate = React.useMemo(() => dateToISO(new Date()), [])
  const isDateValid = React.useMemo(() => validateDate(date, minDate, maxDate), [date, minDate, maxDate])

  React.useEffect(() => {
    if (chosenCity && date && isDateValid) {
      const unixDate = dateToUnix(new Date(date))

      weatherApi.fetchHistory(chosenCity, unixDate)
        .then((res) => {
          if (isErrorResponse(res)) return

          setForecast({
            date: res.current.dt,
            temperature: res.current.temp,
            icon: res.current.weather[0].icon
          })
        })
    }
  }, [chosenCity, date, isDateValid])

  return (
    <section className="past-date-forecast paper">
      <h2 className="paper__header">Forecast for a Date in the Past</h2>
      <div className="past-date-forecast__content paper__content">
        <div className="past-date-forecast__inputs-container">
          <Select
            placeholder="Select city"
            value={chosenCity?.id ?? ''}
            label={chosenCity?.name}
            onOptionClick={(cityId) => setChosenCityId(cityId as string)}
          >
            {cities.map((city) => <Option key={city.id} value={city.id}>{city.name}</Option>)}
          </Select>
          <DatePicker
            placeholder="Select date"
            value={date}
            min={minDate}
            max={maxDate}
            hasError={Boolean(date) && !isDateValid}
            onDateChange={(event) => setDate(event.target.value)}
          />
        </div>
        {forecast
          ? (
              <WeatherCard
                temperature={forecast.temperature}
                icon={forecast.icon}
                date={forecast.date}
              />
            )
          : <ForecastPlaceholder />}
      </div>
    </section>
  )
}

export default PastDateForecast
