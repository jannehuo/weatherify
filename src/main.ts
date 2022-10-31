import { getLocation } from './utils/location'
import { getCurrentWeather } from './api/api'
import { renderCurrentWeather } from './render/render'

const start = async () => {
  const location = (await getLocation()) as GeolocationPosition
  const weather = await getCurrentWeather(location)
  renderCurrentWeather(weather)
}

start()
