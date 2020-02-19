import {combineReducers} from 'redux'
import LoginReducer from './LoginReducer'
import MiningRed from './MiningRed'
import WalletRed from './WalletRed'
import CardPackRed from './CardPackRed'
import ErrorRed from './ErrorRed'

export default combineReducers({
    LoginReducer, MiningRed,  ErrorRed, WalletRed, CardPackRed
})