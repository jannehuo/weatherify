import { API_URL } from '../constants'
import { CurrentWeatherResponse, WeatherData } from '../types'
import { getWeatherType } from '../utils/utils'

export const getCurrentWeather = async (
  location: GeolocationPosition
): Promise<CurrentWeatherResponse> => {
  const apiCallUrl = `${API_URL}?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&current_weather=true`
  const response = await fetch(apiCallUrl)
  const currentWeather = (await response.json()) as WeatherData
  const currentWeatherWithType = {
    ...currentWeather,
    type: getWeatherType(currentWeather.current_weather.temperature),
  }
  return currentWeatherWithType
}
