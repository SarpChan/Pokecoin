import BlockMineService from '../service/BlockMineService'
import { error_occured } from './exceptionActions'


export const getPrevBlock = () => {
    const blockService = BlockMineService
    return async dispatch => {
        try {
            dispatch(got_prev(await blockService.getLastValidBlock()))
        } catch (error) {
            error_occured(error.body)
        }
    }
    
}



export const setMining = (value, mining) => {
    const blockService = BlockMineService
    return async dispatch => {
        
        if (value === true && mining === false) {
            
            dispatch(mine_set(value))
            blockService.mine()

        }    else {
            dispatch(mine_set(value))
            blockService.kill()
        }
    }
}


export const hash_accepted = (props) => (
    {
        type: 'HASH_ACCEPTED',
        payload: props
    }
)



export const got_prev = props => {
    
    return (
    {
        type: "PREV_BLOCK_GOTTEN",
        payload: props

    }
)}

export const gotPow = props => (
    {
        type: "GOT_POW",
        payload: {
            power: props.power
        }
    }
)

export const mine_set = props => (
    {
        type: "MINE_SET",
        payload: props
    }
)

export const hash_not_accepted = props => {
    return (
        {
            type: "HASH_NOT_ACCEPTED",
            payload: props
        }
    )
}