import * as React from 'react'
import { formatDayMonthYear, unixToDate } from '../utils/date'
import './WeatherCard.scss'

interface WeatherCardProps {
  temperature: number;
  icon: string;
  date: number;
}

const ICON_URL_ROOT = 'http://openweathermap.org/img/wn/'
const formatTemperature = (temperature: number): string => {
  const roundedTemperature = Math.round(temperature)

  if (roundedTemperature === 0) {
    return `${roundedTemperature}°`
  }

  return roundedTemperature >= 0 ? `+${roundedTemperature}°` : `${roundedTemperature}°`
}

const WeatherCard: React.FC<WeatherCardProps> = (props) => (
    <article className="weather-card">
      <span className="weather-card__date text-subtitle">{formatDayMonthYear(unixToDate(props.date))}</span>
      <img className="weather-card__image" src={`${ICON_URL_ROOT}${props.icon}@2x.png`} alt="weather" />
      <span className="weather-card__temperature">{formatTemperature(props.temperature)}</span>
    </article>
)

export default WeatherCard
