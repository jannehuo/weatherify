import { API_URL } from '../constants'
import { CurrentWeatherResponse } from '../types'

export const getCurrentWeather = async (
  location: GeolocationPosition
): Promise<CurrentWeatherResponse> => {
  const apiCallUrl = `${API_URL}?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&current_weather=true`
  const response = await fetch(apiCallUrl)
  const currentWeather = await response.json()
  return currentWeather
}
