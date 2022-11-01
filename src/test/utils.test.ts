import { getWeatherType } from '../utils/utils'
import { WeatherType } from '../types'

test('Returns correct type for temperature', () => {
  expect(getWeatherType(-21)).toEqual(WeatherType.FREEZING)
  expect(getWeatherType(-20)).toEqual(WeatherType.FREEZING)
  expect(getWeatherType(-13)).toEqual(WeatherType.COLD)
  expect(getWeatherType(-9)).toEqual(WeatherType.AROUND_ZERO)
  expect(getWeatherType(-3)).toEqual(WeatherType.AROUND_ZERO)
  expect(getWeatherType(5)).toEqual(WeatherType.SPRING)
  expect(getWeatherType(12)).toEqual(WeatherType.SPRING)
  expect(getWeatherType(19)).toEqual(WeatherType.SUMMER)
  expect(getWeatherType(25)).toEqual(WeatherType.SUMMER)
  expect(getWeatherType(32)).toEqual(WeatherType.HEAT)
})
