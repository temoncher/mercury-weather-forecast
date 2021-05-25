import * as React from 'react'
import './WeekForecast.scss'
import ForecastPlaceholder from '../components/ForecastPlaceholder'
import Select from '../components/Select'
import Option from '../components/Option'
import { cities } from '../constants'

const WeekForecast: React.FC = () => {
  const [chosenCityId, setChosenCityId] = React.useState<string | undefined>(undefined)
  const chosenCity = React.useMemo(() => cities.find((city) => city.id === chosenCityId), [chosenCityId])

  return (
    <section className="week-forecast paper">
      <h2 className="paper__header">7 day forecast</h2>
      <div className="paper__content">
        <div className="week-forecast__select-container">
          <Select
            placeholder="Select city"
            value={chosenCity?.id ?? ''}
            label={chosenCity?.name}
            onOptionClick={(cityId) => setChosenCityId(cityId as string)}
          >
            {cities.map((city) => <Option key={city.id} value={city.id}>{city.name}</Option>)}
          </Select>
        </div>
        <ForecastPlaceholder />
      </div>
    </section>
  )
}

export default WeekForecast
