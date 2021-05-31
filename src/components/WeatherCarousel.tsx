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
    const currentCardsListRef = cardsListRef.current

    if (!currentCardsListRef) return

    const currentOffset = currentCardsListRef.scrollLeft
    const carouselWidth = currentCardsListRef.clientWidth

    // `Element` to `HTMLElement` assertion, not ideal but can't really be avoided
    const cards = Array.from(currentCardsListRef.children) as HTMLElement[]
    const firstCardNotInView = cards.findIndex((child) => child.offsetLeft >= currentOffset + carouselWidth)

    cards[firstCardNotInView]?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPrevious = (): void => {
    const currentCardsListRef = cardsListRef.current

    if (!currentCardsListRef) return

    const currentOffset = currentCardsListRef.scrollLeft

    // `Element` to `HTMLElement` assertion, not ideal but can't really be avoided
    const cards = Array.from(currentCardsListRef.children) as HTMLElement[]
    const currentCardIndex = cards.findIndex((child) => child.offsetLeft >= currentOffset)

    cards[currentCardIndex - 1]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="weather-carousel">
      <button className="weather-carousel__button weather-carousel__button--left" onClick={scrollToPrevious}>
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
      <button className="weather-carousel__button weather-carousel__button--right" onClick={scrollToNext}>
        <img src={ChevronRightSrc} alt="chevron-right"/>
      </button>
    </div>
  )
}

export default WeatherCarousel
