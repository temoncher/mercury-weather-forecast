import * as React from 'react'
import './Main.scss'

const Main: React.FC = () => (
  <main className="main">
    <section className="week-forecast forecast-section">7 day forecast</section>
    <section className="past-date-forecast forecast-section">Forecast for a Date in the Past</section>
  </main>
)

export default Main
