import * as React from 'react'
import './PastDateForecast.scss'
import ForecastPlaceholder from '../components/ForecastPlaceholder'

const PastDateForecast: React.FC = () => (
  <section className="past-date-forecast paper">
    <h2 className="paper__header">Forecast for a Date in the Past</h2>
    <div className="paper__content">
      <ForecastPlaceholder />
    </div>
  </section>
)

export default PastDateForecast
