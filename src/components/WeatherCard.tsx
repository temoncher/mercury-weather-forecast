import * as React from 'react'
import { formatDayMonthYear } from '../utils/date'
import './WeatherCard.scss'

interface WeatherCardProps {
  temperature: number;
  icon: string;
  date: number;
}

const ICON_URL_ROOT = 'http://openweathermap.org/img/wn/'

const WeatherCard: React.FC<WeatherCardProps> = (props) => {
  const date = React.useMemo<Date>(() => new Date(props.date * 1000), [props.date])
  const temperature = props.temperature > 0 ? `+${props.temperature}°` : `${props.temperature}°`

  return (
    <div className="weather-card">
      <span className="weather-card__date text-subtitle">{formatDayMonthYear(date)}</span>
      <img className="weather-card__image" src={`${ICON_URL_ROOT}${props.icon}@2x.png`} alt="weather" />
      <span className="weather-card__temperature">{temperature}</span>
    </div>
  )
}

export default WeatherCard
