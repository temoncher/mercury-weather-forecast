import * as React from 'react'
import './App.scss'
import Header from './Header'

const App: React.FC = () => (
  <div className="root">
    <Header />

    <main className="main">
      <section className="week-forecast forecast-section">7 day forecast</section>
      <section className="past-date-forecast forecast-section">Forecast for a Date in the Past</section>
    </main>

    <footer className="footer">
      <p className="text-footer">С любовью от Mercury Development</p>
    </footer>
  </div>
)

export default App
