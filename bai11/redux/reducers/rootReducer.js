import { combineReducers } from 'redux'
import {settingsReducer} from './settingsReducer'
const rootReducer = combineReducers({
    settingsReducer,
    // xxReducer, ...
})
export default rootReducer