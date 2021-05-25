import * as React from 'react'
import './PastDateForecast.scss'
import ForecastPlaceholder from '../components/ForecastPlaceholder'
import Select from '../components/Select'
import DatePicker from '../components/DatePicker'
import Option from '../components/Option'
import { cities } from '../constants'

const PastDateForecast: React.FC = () => {
  const [chosenCityId, setChosenCityId] = React.useState<string | undefined>(undefined)
  const [date, setDate] = React.useState<string>('')
  const chosenCity = React.useMemo(() => cities.find((city) => city.id === chosenCityId), [chosenCityId])

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
          <DatePicker value={date} onDateChange={(event) => setDate(event.target.value)} />
        </div>
        <ForecastPlaceholder />
      </div>
    </section>
  )
}

export default PastDateForecast
