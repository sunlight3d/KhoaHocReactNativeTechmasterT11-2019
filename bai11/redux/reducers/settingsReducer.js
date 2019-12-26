import {ACTION_CHANGE_DARKMODE, ACTION_CHANGE_NICKNAME} from '../actions/actionTypes'
const INITIAL_STATE = {
    isDarkMode: false,
    nickName: ''
}
//action = function , return :  type + payload(params)
export const settingsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTION_CHANGE_NICKNAME:
            return {
                ...state,                
                nickName: action.nickName
            }
        case ACTION_CHANGE_DARKMODE:
            return {
                ...state,
                isDarkMode: action.isDarkMode,                
            }
        default:
            return state
    }
}