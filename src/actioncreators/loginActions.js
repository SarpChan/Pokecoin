import LoginService from '../service/LoginService'

const loginService = LoginService

const login_started = () => { 
return (
        
    {
        type: 'LOGIN_STARTED',
        
    })}

const login_succeeded = (props) => (
    {
        type: 'LOGIN_SUCCEEDED',

    }
)

const login_failed = (props) => (
    {
        type: 'LOGIN_FAILED',
        payload: props
    }
)

export const logged_out = props => (
    {
        type: 'LOGGED_OUT'
    }
)

const register_started = props => ({
    type: "REGISTER_STARTED",
    payload: {
        username: props.username,
        password: props.password
    }
})

const register_succeeded = (props) => ({
    type: 'REGISTER_SUCCEEDED'
})

const register_failed = (props) => ({
    type: 'REGISTER_FAILED',
    payload: props
})

export const login = (input, callback) => {

    return async dispatch => {
        dispatch(login_started())
        
        try {
            await loginService.login(input.username, input.password)
            dispatch(login_succeeded())
            if(callback != null){
                callback()
            }
            
        } catch (error) {
            
            dispatch(login_failed(error.body))
        }

    }
}


export const register = (input, callback) => {
    
    return async dispatch => {
        try {
            await loginService.register(input.username, input.password)
            dispatch(register_succeeded())
            
            try {
                await loginService.login(input.username, input.password)
                dispatch(login_succeeded())
                if (callback != null) {
                    callback()
                }

            } catch (error) {
                
                dispatch(login_failed(error.body))
            }
        } catch (error) {

            dispatch(register_failed(error.body))
        }


    }
}

export const logout = (callback) => {
    return async dispatch => {
        loginService.logout()
        callback()
        dispatch(logged_out())
    }
}
