import CardPackService from '../service/CardPackService'
import {error_occured} from './exceptionActions'

const packService = CardPackService 



let cardPackId = 0
export const got_packs = (props) => {

    return (
        {
            type: "GOT_PACKS",
            payload: props.map(prop => {
                return {
                    name: prop,
                    id: cardPackId++
                }
            })
        }
    )
}

export const getPackNames = () => {
    return async dispatch => {
        try {
            dispatch(got_packs(await packService.getPackNames()))
        } catch (error) {
            dispatch(error_occured(error.body))
        }
    }
    
}
export const getPackCost = () => {
    return async dispatch => {
        try {
            //dispatch(error_occured({error: {statusCode: "401", message:"test"}}))
            dispatch(got_package_cost(await packService.getPackCost()))
        } catch (error) {
            dispatch(error_occured(error_occured(error.body)))
        }
    }
}

export const buyPack = (name) => {
    return async dispatch => {
        try {
            dispatch(bought_pack(await packService.buyPack(name)))
           
        } catch (error) {
            dispatch(error_occured(error_occured(error.body)))
        }
    }
}

export const openedPack = () => {
    return dispatch => {
        dispatch(opened_pack())
    }
}

const opened_pack = () => {
    return (
        {
            type:"OPENED_PACK"
        }
    )
}



const got_package_cost = props => {
    return (
        {
            type: "GOT_PACKAGE_COST",
            payload: props
        }
    )
}

const bought_pack = (props) => {
    return (
        {
            type: "BOUGHT_PACK",
            payload: {
                name: props.name,
                cards: props.cards
            }
        }
    )
}