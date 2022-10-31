export const getLocation = () => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    )
  } else {
    throw new Error('Geolocation is not supported by this browser.')
  }
}
