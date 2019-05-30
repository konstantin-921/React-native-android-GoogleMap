import { createStore, combineReducers } from 'redux'
import * as reducers from "./ducks";

const rootReducer = combineReducers( reducers );

export default createStore(
    rootReducer,
);
