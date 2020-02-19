import React,{useEffect} from 'react'
import {
    connect, useSelector
} from "react-redux"

import CardPack from '../components/Cardpack'
import '../static/components/cardPackPage.scss'
import CardFlip from '../components/CardFlip'
import {getPackNames, buyPack, openedPack, getPackCost} from '../actioncreators/packActions'
import Modal from '../components/Modal'
import { useHistory } from 'react-router-dom'
import { errorResolved } from '../actioncreators/exceptionActions'


const CardPackPage = (props) => {

    const switchSite = useHistory()
    const modalOpen = useSelector(state => state.ErrorRed.modal)
    
    const packs = useSelector(state => state.CardPackRed.packs)
    const bought = useSelector(state => state.CardPackRed.lastBought.cards)
    const coinBallance = useSelector(state => state.WalletRed.amount)
    const showBought = useSelector(state => state.CardPackRed.bought)
    const error = useSelector(state => state.ErrorRed)
    const cost = useSelector(state => state.CardPackRed.packageCost)
    const authorized = sessionStorage.getItem("pokeAuth")

    useEffect(() => {

        if(packs.length === 0){
            props.getPackNames()
        }
        if(cost === Number.POSITIVE_INFINITY){
            props.getPackCost()
        }
       
        
    }, [])

    const modalOnClick = () => {

        if (error.to) {
            switchSite.push(error.to)
        }
        props.errorResolved()
    }
   

    

    return (
        <div>
            {error.statusCode ? <Modal statusCode={error.statusCode} message={error.message} show={modalOpen} onClick={() => modalOnClick()} /> :
        <div className="packContainer">

            {showBought ? 
            
            <CardFlip pack={bought} click={() => props.openedPack()}></CardFlip> 
            
            : <ul >
                {
                    packs ?
                        packs.map((pack) => {

                            return (<li key={pack.id}>
                                <CardPack
                                    enoughCoins = {coinBallance >= cost? true : false }
                                    logged = {authorized? true: false}
                                    packageCost ={cost}
                                    id={pack.name}
                                    onClick={() => props.buyPack(pack.name)}
                                    to={`/cards/packages/${pack.name}`}

                                />
                            </li>)
                        }
                        ) : null
                }
            </ul>}
            
            
        </div>
}
        </div>
        
       
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
            errorResolved: () => errorResolved()(dispatch),
            getPackNames : () => getPackNames()(dispatch),
            getPackCost : () => getPackCost()(dispatch),
            buyPack : (packname) => buyPack(packname)(dispatch),
            openedPack : () => openedPack()(dispatch),

            dispatch
        }
    })(CardPackPage);