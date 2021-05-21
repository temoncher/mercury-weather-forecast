import * as React from 'react'
import './Header.scss'

const Header: React.FC = () => (
  <header className="header">
    <div className="header__container">
      <h1 className="header-text">
        <span className="header-text__left">Weather</span>
        <span className="header-text__right">forecast</span>
      </h1>
    </div>
  </header>
)

export default Header
