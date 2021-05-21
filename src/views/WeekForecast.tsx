import * as React from 'react'
import './WeekForecast.scss'
import ForecastPlaceholder from '../components/ForecastPlaceholder'

const WeekForecast: React.FC = () => (
  <section className="week-forecast paper">
    <h2 className="paper__header">7 day forecast</h2>
    <div className="paper__content">
      <ForecastPlaceholder />
    </div>
  </section>
)

export default WeekForecast
