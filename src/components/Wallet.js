import React, {useEffect} from 'react'
import {useSelector, connect} from 'react-redux'

import {updateWallet} from '../actioncreators/walletActions'
import pokecoin from '../static/images/pokecoin.png'


const Wallet = (props) => {

    
    
    const foundHash = useSelector((state) => state.MiningRed.found)
    const logged = useSelector(state => state.LoginReducer.loggedIn)
    const cashCount = useSelector(state => state.WalletRed.amount)
    const boughtPack = useSelector(state => state.CardPackRed.lastBought)

    useEffect(() => {
        props.updateWallet()
        
    },[foundHash, logged, boughtPack])

    

    


    return (
        
            
            
            <p className="wallet">{cashCount} <img className="coin" src={pokecoin}></img></p>
            
       
    )
}
export default connect(
    state => {
        return {
            state: state.combineReducers
        }
    },
    dispatch => {
        return {
            updateWallet: () => updateWallet()(dispatch),
            dispatch
        }
    })(Wallet)
