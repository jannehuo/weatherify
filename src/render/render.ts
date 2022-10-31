import { CurrentWeatherResponse } from '../types'
import { getMainContainer } from '../utils/dom'

export const renderCurrentWeather = (
  currentWeather: CurrentWeatherResponse
) => {
  const main = getMainContainer()
  if (main) {
    main!.innerHTML = `<h1>${currentWeather.current_weather.temperature}</h1>`
  }
}
