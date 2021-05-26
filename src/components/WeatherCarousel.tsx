import * as React from 'react'
import './WeatherCarousel.scss'
import WeatherCard from './WeatherCard'
import { DailyForecast } from '../models/DailyForecast'
import ChevronLeftSrc from '../assets/icons/24/chevron-left.svg'
import ChevronRightSrc from '../assets/icons/24/chevron-right.svg'

interface WeatherCarouselProps {
  dailies: DailyForecast[]
}

const WeatherCarousel: React.FC<WeatherCarouselProps> = (props) => {
  const cardsListRef = React.useRef<HTMLDivElement>(null)

  const scrollToNext = (): void => {
    const currentOffset = cardsListRef.current?.scrollLeft ?? 0
    const carouselWidth = cardsListRef.current?.clientWidth ?? 0
    const children = cardsListRef.current?.children ?? []

    const cards = Array.from(cardsListRef.current?.children ?? []) as HTMLElement[]
    const firstCardNotInView = cards.findIndex((child) => child.offsetLeft >= currentOffset + carouselWidth)

    children[firstCardNotInView]?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPrevious = (): void => {
    const currentOffset = cardsListRef.current?.scrollLeft ?? 0
    const children = cardsListRef.current?.children ?? []

    const cards = Array.from(cardsListRef.current?.children ?? []) as HTMLElement[]
    const currentCardIndex = cards.findIndex((child) => child.offsetLeft >= currentOffset)

    children[currentCardIndex - 1]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="weather-carousel">
      <button className="weather-carousel__left-button" onClick={scrollToPrevious}>
        <img src={ChevronLeftSrc} alt="chevron-left"/>
      </button>
      <div ref={cardsListRef} className="weather-carousel__list">
        {props.dailies.map((daily) => (
          <WeatherCard
            key={daily.date}
            date={daily.date}
            temperature={daily.temperature}
            icon={daily.icon}
          />
        ))}
      </div>
      <button className="weather-carousel__right-button" onClick={scrollToNext}>
        <img src={ChevronRightSrc} alt="chevron-right"/>
      </button>
    </div>
  )
}

export default WeatherCarousel
