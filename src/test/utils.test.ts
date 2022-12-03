import { getWeatherType, getWeatherVariation } from '../utils/utils'
import { WeatherType, WeatherVariable } from '../types'

// Weather variations grouped by code
const clear = [0]
const overcast = [1, 2, 3]
const fog = [45, 48]
const light_drizzle = [51, 53, 55]
const freezing_drizzle = [56, 57]
const light_rain = [61, 63, 65]
const freezing_rain = [66, 67]
const snow_fall = [71, 73, 75]
const snow_grains = [77]
const rain_showers = [80, 81, 82]
const snow_showers = [85, 86]
const thunderstorm = [95]
const thunderstorm_hail = [96, 99]

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

const testWeatherCode = (codes: number[], expected: WeatherVariable) => {
  codes.forEach((code) => {
    expect(getWeatherVariation(code)).toEqual(expected)
  })
}

test(`Returns weather variable: ${WeatherVariable.CLEAR}`, () => {
  testWeatherCode(clear, WeatherVariable.CLEAR)
})

test(`Returns weather variable: ${WeatherVariable.OVERCAST}`, () => {
  testWeatherCode(overcast, WeatherVariable.OVERCAST)
})

test(`Returns weather variable: ${WeatherVariable.FOG}`, () => {
  testWeatherCode(fog, WeatherVariable.FOG)
})

test(`Returns weather variable: ${WeatherVariable.LIGHT_DRIZZLE}`, () => {
  testWeatherCode(light_drizzle, WeatherVariable.LIGHT_DRIZZLE)
})

test(`Returns weather variable: ${WeatherVariable.FREEZING_DRIZZLE}`, () => {
  testWeatherCode(freezing_drizzle, WeatherVariable.FREEZING_DRIZZLE)
})

test(`Returns weather variable: ${WeatherVariable.LIGHT_RAIN}`, () => {
  testWeatherCode(light_rain, WeatherVariable.LIGHT_RAIN)
})

test(`Returns weather variable: ${WeatherVariable.FREEZING_RAIN}`, () => {
  testWeatherCode(freezing_rain, WeatherVariable.FREEZING_RAIN)
})

test(`Returns weather variable: ${WeatherVariable.SNOW_FALL}`, () => {
  testWeatherCode(snow_fall, WeatherVariable.SNOW_FALL)
})

test(`Returns weather variable: ${WeatherVariable.SNOW_GRAINS}`, () => {
  testWeatherCode(snow_grains, WeatherVariable.SNOW_GRAINS)
})

test(`Returns weather variable: ${WeatherVariable.RAIN_SHOWERS}`, () => {
  testWeatherCode(rain_showers, WeatherVariable.RAIN_SHOWERS)
})

test(`Returns weather variable: ${WeatherVariable.SNOW_SHOWERS}`, () => {
  testWeatherCode(snow_showers, WeatherVariable.SNOW_SHOWERS)
})

test(`Returns weather variable: ${WeatherVariable.THUNDERSTORM}`, () => {
  testWeatherCode(thunderstorm, WeatherVariable.THUNDERSTORM)
})

test(`Returns weather variable: ${WeatherVariable.THUNDERSTORM_HAIL}`, () => {
  testWeatherCode(thunderstorm_hail, WeatherVariable.THUNDERSTORM_HAIL)
})
