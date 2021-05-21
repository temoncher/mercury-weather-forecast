import * as React from 'react'
import './App.scss'
import Footer from './views/Footer'
import Header from './views/Header'
import Main from './views/Main'

const App: React.FC = () => (
  <div className="root">
    <Header />
    <Main />
    <Footer />
  </div>
)

export default App
