import { CurrentWeatherResponse } from '../types'
import { getMainContainer } from '../utils/dom'
import { getWeatherBackground } from '../utils/utils'

export const renderCurrentWeather = (
  currentWeather: CurrentWeatherResponse
) => {
  const main = getMainContainer()
  const containerBackground = getWeatherBackground(currentWeather.type)
  if (main) {
    main!.innerHTML = `
      <div class="weather-info-container ${containerBackground}">
        <h1>${currentWeather.current_weather.temperature}</h1>
      </div>
    `
  }
}
