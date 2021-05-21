import * as React from 'react'
import './Main.scss'
import PastDateForecast from './PastDateForecast'
import WeekForecast from './WeekForecast'

const Main: React.FC = () => (
  <main className="main">
    <div className="main__container">
      <WeekForecast />
      <PastDateForecast />
    </div>
  </main>
)

export default Main
