import * as types from '../constants/constants'

export const initialState = {
  value: 0,
}

const mainReducer = (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case types.RESET_COUNTER:
      return {
        value: 0,
      }
    case types.DECREMENT_COUNTER:
      return {
        value: state.value - 1,
      }
    case types.INCREMENT_COUNTER:
      return {
        value: state.value + 1,
      }
    default:
      return state
  }
}

export default mainReducer