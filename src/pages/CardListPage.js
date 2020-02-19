import React, { useEffect } from 'react'
import {
     connect, useSelector
} from "react-redux"
import Card from '../components/Card'
import { useParams} from 'react-router-dom'
import '../static/components/cardlist.scss'
import {getAllCards, getUserCards}from '../actioncreators/cardActions' 
import Modal from '../components/Modal'
import { useHistory } from 'react-router-dom'
import { errorResolved } from '../actioncreators/exceptionActions'

const CardListPage = (props) => {
    
    
    const switchSite = useHistory()
    const modalOpen = useSelector(state => state.ErrorRed.modal)
    
    const cards = useSelector(state => state.CardPackRed.cards)
    const packId = useParams().id
    const userCards = useSelector(state => state.CardPackRed.usercards)
    const error = useSelector(state => state.ErrorRed)
    
   
    useEffect(() => {
       
        if(cards.length === 0){
            props.getAllCards()
        }
        if(userCards.length === 0 && sessionStorage.getItem("pokeAuth")){
            props.getUserCards()
        }
        
    

    }, [])


    const modalOnClick = () => {
        
        if(error.to){
            switchSite.push(error.to)
        }
        props.errorResolved()
    }

    const renderCard = (card) => {
        
            return (
                
                <Card
                    className={`${userCards.includes(card.id)? 'user': 'card'}`}
                    key={card.id}
                    id={card.id}
                    card={card}
                    to={`/cards/${card.id}`}
                />
               
            )
        
    }

    

    return (
        <div>
        {modalOpen? <Modal show={modalOpen} onClick={() => modalOnClick()} />: 
        <div className="gridContainer"> 
        
            {cards ?
                cards.map(card => {

                    if(packId == null){
                        return renderCard(card)
                    } else {
                        if (card.set === packId) {

                            return renderCard(card)
                        }
                        
                    }
                    
                    
                    
                }

                ) : null}
           
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
            getAllCards: () => getAllCards()(dispatch),
            getUserCards: () => getUserCards()(dispatch),
            dispatch
        }
    })(CardListPage);