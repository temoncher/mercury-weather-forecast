import * as React from 'react'
import { WeatherApi } from '../services/WeatherApi'

export const WeatherApiContext = React.createContext<WeatherApi | null>(null)
