const initialState = {
    mining: false,
    found: {},
    lastValid: {},
    accepted: true,
    message: null,
    errorMessage : null

}
const MiningRed = (state = initialState, action) => {

    switch (action.type) {
        case 'MINE_SET':
            return Object.assign({}, state, {
                mining : action.payload
            })
        case 'HASH_ACCEPTED':
            
            return Object.assign({}, state, {
                found : action.payload,
                accepted: true
            })
        case 'PREV_BLOCK_GOTTEN':
            
            return Object.assign({}, state, {
                lastValid: action.payload
            })
        case 'HASH_NOT_ACCEPTED':
            if(action.payload.status === "401"){
                return initialState
            } else {
                return Object.assign({}, state, {
                    accepted: false,
                    errorMessage: action.payload.body.message

                })
            }
            
        case 'ERROR':
            if (action.payload.statusCode) {
                return initialState
            } else {
                return state
            }
        case 'LOGGED_OUT':
            return Object.assign({}, state, initialState)
        default:
            return state
    }
    

} 
export default MiningRed