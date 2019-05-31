import * as types from "./types"
import { createReducer } from "../../utils"

const initialState = {
  userPlaces: [],
  userLocation: null,
  isSelfLocation: true
};

const mapReducer = createReducer( initialState )( {
  [ types.ADD_POINT ]: ( state, action ) => {
    const { point } = action.payload
    return {
      ...state,
      userPlaces: [ ...state.userPlaces, point]
    }
  },
  [ types.DEFINE_LOCATION ]: ( state, action ) => {
    const { location } = action.payload
    return {
      ...state,
      userLocation: location
    }
  },
  [ types.SET_SELF_LOCATION ]: ( state, action ) => {
    const { flag } = action.payload
    return {
      ...state,
      isSelfLocation: flag
    }
  },
  [ types.RESET_POINTS ]: ( state, action ) => {
    return {
      ...state,
      userPlaces: []
    }
  },
} );

export default mapReducer;
