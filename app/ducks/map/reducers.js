import * as types from "./types"
import { createReducer } from "../../utils"

const initialState = {
  value: 5
};

const mapReducer = createReducer( initialState )( {
  [ types.RESET_COUNTER ]: ( state, action ) => {
    return { 
      ...state,
       value: 0
    }
  },
  [ types.DECREMENT_COUNTER ]: ( state, action ) => {
    return { 
      ...state,
      value: state.value - 1
    }
  },
  [ types.INCREMENT_COUNTER ]: ( state, action ) => {
    return {
      ...state,
      value: state.value + 1
    }
  },
} );

export default mapReducer;
