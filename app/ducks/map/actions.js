import * as types from './types'

export const addPoint = (point) => ({
  type: types.ADD_POINT,
  payload: {
    point
  }
})
export const defineLocation = (location) => ({
  type: types.DEFINE_LOCATION,
  payload: {
    location
  }
})
export const setSelfLocation = (flag) => ({
  type: types.SET_SELF_LOCATION,
  payload: {
    flag
  }
})
export const resetPoints = () => ({
  type: types.RESET_POINTS
})