import { CurrentWeatherResponse } from '../types'
import { getMainContainer } from '../utils/dom'
import { getWeatherBackground } from '../utils/utils'
import '../components/Weather'

export const renderCurrentWeather = (
  currentWeather: CurrentWeatherResponse
) => {
  const main = getMainContainer()
  const containerBackground = getWeatherBackground(currentWeather.type)
  if (main) {
    main!.innerHTML = `
      <div class="weather-info-container ${containerBackground}">
        <weather-element>
          <div slot="temp">${currentWeather.current_weather.temperature}</div>
        </weather-element>
      </div>
    `
  }
}
