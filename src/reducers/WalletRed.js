const initialState = {
    amount: 0
}

const WalletRed = (state = initialState, action) => {

    switch(action.type){
        case 'WALLET_UPDATED':
            
            return Object.assign({},state, {
                amount: action.payload.amount
            })
        case 'ERROR':
            if (action.payload.statusCode) {
                return initialState
            } else {
                return state
            }

        case 'LOGGED_OUT':
            return Object.assign({}, state, initialState)    
        default: return state
    }
}

export default WalletRed