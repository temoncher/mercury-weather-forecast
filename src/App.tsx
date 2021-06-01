import * as React from 'react'
import './App.scss'
import Footer from './views/Footer'
import Header from './views/Header'
import Main from './views/Main'
import ApiKeyModal from './components/ApiKeyModal'
import { WeatherApiContext } from './contexts/webApiContext'
import { WeatherApi } from './services/WeatherApi'
import { classnames } from './utils/classnames'

const App: React.FC = () => {
  const [apiKey, setApiKey] = React.useState<string>('')

  const rootClasses = classnames({
    root: true,
    unscrollable: Boolean(apiKey)
  })

  return (
    <div className={rootClasses}>
      {!apiKey && <ApiKeyModal onSubmit={(newApiKey) => setApiKey(newApiKey)} />}
      <WeatherApiContext.Provider value={new WeatherApi(apiKey)}>
          <Header />
          <Main />
          <Footer />
      </WeatherApiContext.Provider>
    </div>
  )
}

export default App
