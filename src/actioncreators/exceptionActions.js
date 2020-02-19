export const error_occured = (props) => {
    

    

    switch (props.error.statusCode) {

        case "400":
            return ( {
                type: "ERROR",
                payload: {
                    statusCode: props.error.statusCode,
                    message: props.error.message,
                    to: "/home"
                }
            })
            
        case "401":
            sessionStorage.removeItem("pokeAuth")
            return ({
                type: "ERROR",
                payload: {
                    statusCode: props.error.statusCode,
                    message: props.error.message,
                    to: "/home"
                }
            })
        default:
            return ({
                type: "ERROR",
                payload: {
                    statusCode: props.error.statusCode,
                    message: props.error.message,
                    to:"/home"
                    
                }
            })
    }
    
}

export const errorResolved = props => {
    return async dispatch => {
        dispatch(error_resolved())
    }
}

const error_resolved = () => {
    return ({
        type: "ERROR_RESOLVED"
    })
}