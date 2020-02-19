import React, {useEffect} from 'react'
import{connect, useSelector} from "react-redux"
import "../static/components/cardDetails.scss"
import {useParams} from 'react-router-dom'

import CardDetails from '../components/CardDetails'
import {getCard} from '../actioncreators/cardActions'

const CardDetailPage = props => {

    
    const cardId = useParams().id
    const card = useSelector(state => 
        state.CardPackRed.viewedCard
    )
    useEffect(() => {

        
        props.getCard(cardId)
        
    }, [])

    

    return (
        <div>
           
                
            {card ? <CardDetails
                item={card}
                cardid={cardId}
            />:null}        
            


            
                       
            
            
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
            getCard: (cardId) => getCard(cardId)(dispatch),
            dispatch
        }
    })(CardDetailPage);