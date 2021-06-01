import * as React from 'react'
import { cities } from '../constants'
import { isErrorResponse } from '../services/models/ErrorResponse'
import { WeatherApi } from '../services/WeatherApi'
import { classnames } from '../utils/classnames'
import './ApiKeyModal.scss'

interface ApiKeyModalProps {
  onSubmit: (apiKey: string) => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = (props) => {
  const [apiKey, setApiKey] = React.useState('')
  const [isApiKeyInvalid, setIsApiKeyInvalid] = React.useState(false)

  const submitKey = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const api = new WeatherApi(apiKey)
    const response = await api.fetchWeeklyForecast(cities[0])

    if (isErrorResponse(response)) {
      setIsApiKeyInvalid(true)
    } else {
      props.onSubmit(apiKey)
    }
  }

  const apiKeyModalClasses = classnames({
    'api-key-modal': true,
    'api-key-modal--invalid': isApiKeyInvalid
  })

  return (
    <>
      <div className={apiKeyModalClasses}>
        <form className="api-key-modal__form" onSubmit={submitKey}>
          <div className="api-key-modal__input-container input">
            <input
              className="text-body"
              type="text"
              placeholder="Paste your api key"
              value={apiKey}
              onChange={(event) => { setIsApiKeyInvalid(false); setApiKey(event.target.value) }}
            />
          </div>
          <div className="api-key-modal__button-container">
            <div className="api-key-modal__error-container">
             {isApiKeyInvalid && <span className="api-key-modal__error-message">Invalid api key</span>}
            </div>
            <button className="api-key-modal__submit-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="backdrop"></div>
    </>
  )
}

export default ApiKeyModal
