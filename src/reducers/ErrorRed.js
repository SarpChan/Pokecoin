const initialState = {
    statusCode: null,
    message : null,
    to: null,
    modal: false
}

const ErrorRed = (state = initialState, action) => {
    
    switch(action.type){
        case 'ERROR':
            return Object.assign({}, state, {
                statusCode : action.payload.statusCode,
                message: action.payload.message,
                to: action.payload.to,
                modal: true
            })
        case 'ERROR_RESOLVED':
            return initialState
        default:
            return state
    }
}

export default ErrorRed