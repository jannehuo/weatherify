import { BackgroundClass, WeatherType, CurrentWeatherResponse } from '../types'
import { TEMP_LIMITS } from '../constants'

export const getWeatherBackground = (type: WeatherType): BackgroundClass => {
  switch (type) {
    case WeatherType.FREEZING:
      return BackgroundClass.FREEZING
    case WeatherType.COLD:
      return BackgroundClass.COLD
    case WeatherType.AROUND_ZERO:
      return BackgroundClass.ZERO
    case WeatherType.SPRING:
      return BackgroundClass.SPRING
    case WeatherType.SUMMER:
      return BackgroundClass.SUMMER
    case WeatherType.HEAT:
      return BackgroundClass.HEAT
    default:
      return BackgroundClass.DEFAULT
  }
}

export const getWeatherType = (temp: number): WeatherType => {
  if (temp <= TEMP_LIMITS.FREEZING) {
    return WeatherType.FREEZING
  }
  if (temp > TEMP_LIMITS.FREEZING && temp <= TEMP_LIMITS.COLD) {
    return WeatherType.COLD
  }
  if (temp > TEMP_LIMITS.COLD && temp <= TEMP_LIMITS.ZERO) {
    return WeatherType.AROUND_ZERO
  }
  if (temp > TEMP_LIMITS.ZERO && temp <= TEMP_LIMITS.SPRING) {
    return WeatherType.SPRING
  }
  if (temp > TEMP_LIMITS.SPRING && temp <= TEMP_LIMITS.HEAT) {
    return WeatherType.SUMMER
  }
  return WeatherType.HEAT
}
