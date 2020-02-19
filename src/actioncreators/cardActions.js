import CardPackService from '../service/CardPackService'
import {error_occured} from './exceptionActions'
const cardPackService = CardPackService
export const getAllCards = () => {

    return async dispatch => {
        try {
            dispatch(got_all_cards(await cardPackService.getAllCards()))
        } catch (error) {
            error_occured(error.body)
        }
    }
}

export const getUserCards = () => {
    return async dispatch => {
        try {
        dispatch(got_usercards(await cardPackService.getUserCards()))
    } catch (error) {
        error_occured(error.body)
    } 
    }
   
}

export const getCard = (cardId) => {
    return async dispatch => {
        try {

            dispatch(got_card(await cardPackService.getCard(cardId)))
        } catch (error) {
            error_occured(error.body)
        }
    }
}

const got_cards = (props) => {
    return (
        {
            type: "GOT_CARDS",
            payload: {
                cards: props.cards
            }
        }
    )
}

const got_card = (props) => {
    return (
        {
            type: "GOT_CARD",
            payload: props.card

        }
    )
}

const got_usercards = (props) => {

    let temp = []
    props.forEach(element => {
        temp.push(element.cardId)
    });

    return (
        {
            type: "GOT_USERCARDS",
            payload: {
                cards: temp
            }
        }
    )
}

const got_all_cards = props => {

    return (
        {
            type: "GOT_ALL_CARDS",
            payload: props
        }
    )
}