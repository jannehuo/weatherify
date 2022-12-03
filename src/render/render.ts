import { CurrentWeatherResponse } from '../types'
import { getMainContainer } from '../utils/dom'
import '../components/Weather'

export const renderCurrentWeather = (
  currentWeather: CurrentWeatherResponse
) => {
  const main = getMainContainer()
  if (main) {
    main!.innerHTML = `
      <div class="weather-info-container bg-default">
        <weather-element type="${currentWeather.type}">
          <div slot="temp">${currentWeather.current_weather.temperature}</div>
        </weather-element>
      </div>
    `
  }
}
