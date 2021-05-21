import * as React from 'react'
import './Main.scss'
import PastDateForecast from './PastDateForecast'
import WeekForecast from './WeekForecast'

const Main: React.FC = () => (
  <main className="main">
    {/*
      This div needs to wrap main container
      for papers to not strech themselves straight
      to the footer
    */}
    <div>
      <div className="main__container">
        <WeekForecast />
        <PastDateForecast />
      </div>
    </div>
  </main>
)

export default Main
