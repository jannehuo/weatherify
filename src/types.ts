export interface CurrentWeatherResponse extends WeatherData {
  type: WeatherType
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

export enum BackgroundClass {
  DEFAULT = 'bg-default',
  FREEZING = 'bg-freezing',
  COLD = 'bg-cold',
  ZERO = 'bg-zero',
  SPRING = 'bg-spring',
  SUMMER = 'bg-summer',
  HEAT = 'bg-heat',
}
