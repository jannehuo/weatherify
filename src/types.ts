export interface CurrentWeatherResponse extends WeatherData {
  type: WeatherType
  variation: WeatherVariable
}

export interface WeatherData {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_weather: CurrentWeather
}

export interface CurrentWeather {
  temperature: number
  windspeed: number
  winddirection: number
  weathercode: number
  time: string
}

export enum WeatherType {
  FREEZING = 'freezing',
  COLD = 'cold',
  AROUND_ZERO = 'around_zero',
  SPRING = 'spring',
  SUMMER = 'summer',
  HEAT = 'heat',
}

export enum WeatherVariable {
  CLEAR = 'clear',
  OVERCAST = 'overcast',
  FOG = 'fog',
  LIGHT_DRIZZLE = 'light_drizzle',
  FREEZING_DRIZZLE = 'freezing_drizzle',
  LIGHT_RAIN = 'light_rain',
  FREEZING_RAIN = 'freezing_rain',
  SNOW_FALL = 'snow_fall',
  SNOW_GRAINS = 'snow_grains',
  RAIN_SHOWERS = 'rain_showers',
  SNOW_SHOWERS = 'snow_showers',
  THUNDERSTORM = 'thunderstorm',
  THUNDERSTORM_HAIL = 'thunderstorm_hail',
}
