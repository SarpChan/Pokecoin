


const initialState = {
  loggedIn: false,
  loggingIn: false,
  failed: {},
  
}


const LoginReducer = (state = initialState, action) => {
    
    
    
    switch(action.type){
        case 'LOGIN_STARTED':

            return Object.assign({}, state, {
                loggingIn: true
              })

        case 'LOGIN_SUCCEEDED':
            return Object.assign({},state,{
                loggingIn : false,
                loggedIn : true,
                failed: {},
                
            })

        case 'LOGIN_FAILED':
          return Object.assign({}, state, {
            loggingIn: false,
            loggedIn: false,
            failed: action.payload
          })

        case 'REGISTER_FAILED':
          return Object.assign({}, state, {
            loggingIn: false,
            loggedIn: false,
            failed: action.payload
          })


        case 'LOGGED_OUT':
          return Object.assign({}, state, initialState)
              
        case 'ERROR':
          if (action.payload.statusCode) {
            return initialState
          } else {
            return state
          }

        default:
          return state

    }
    

    
}

export default LoginReducer