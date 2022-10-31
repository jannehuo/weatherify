import { MAIN_CONTAINER_ID } from '../constants'

export const getMainContainer = (): HTMLElement | null => {
  return document.getElementById(MAIN_CONTAINER_ID)
}
