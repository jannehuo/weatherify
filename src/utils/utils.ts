import { BackgroundClass, WeatherType, WeatherVariable } from '../types'
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

export const getWeatherVariation = (code: number): WeatherVariable => {
  switch (code) {
    case 0:
      return WeatherVariable.CLEAR
    case 1:
    case 2:
    case 3:
      return WeatherVariable.OVERCAST
    case 45:
    case 48:
      return WeatherVariable.FOG
    case 51:
    case 53:
    case 55:
      return WeatherVariable.LIGHT_DRIZZLE
    case 56:
    case 57:
      return WeatherVariable.FREEZING_DRIZZLE
    case 61:
    case 63:
    case 65:
      return WeatherVariable.LIGHT_RAIN
    case 66:
    case 67:
      return WeatherVariable.FREEZING_RAIN
    case 71:
    case 73:
    case 75:
      return WeatherVariable.SNOW_FALL
    case 77:
      return WeatherVariable.SNOW_GRAINS
    case 80:
    case 81:
    case 82:
      return WeatherVariable.RAIN_SHOWERS
    case 85:
    case 86:
      return WeatherVariable.SNOW_SHOWERS
    case 95:
      return WeatherVariable.THUNDERSTORM
    case 96:
    case 99:
      return WeatherVariable.THUNDERSTORM_HAIL
    default:
      return WeatherVariable.CLEAR
  }
}
