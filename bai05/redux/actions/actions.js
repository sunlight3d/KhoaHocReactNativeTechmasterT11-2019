import {ACTION_CHANGE_NICKNAME, ACTION_CHANGE_DARKMODE} from './actionTypes'
//action = function , return :  type + payload(params)
export const changeDarkMode = (isDarkMode) => ({
    type: ACTION_CHANGE_DARKMODE, 
    isDarkMode
})
export const changeNickName = (nickName) => ({
    type: ACTION_CHANGE_NICKNAME, 
    nickName: nickName
})
