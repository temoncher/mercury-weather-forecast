import * as React from 'react'
import './ForecastPlaceholder.scss'
import LogoPlaceholderSrc from '../assets/placeholder/logo-placeholder.png'

const ForecastPlaceholder: React.FC = () => (
  <div className="forecast-placeholder">
    <img className="forecast-placeholder__image" src={LogoPlaceholderSrc} alt="weather" />
    <h3 className="text-subtitle text-center">Fill in all the fields and the weather will be displayed</h3>
  </div>
)

export default ForecastPlaceholder
