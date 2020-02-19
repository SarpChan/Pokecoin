import React from 'react'

import {
    
    Route,
    Redirect

} from "react-router-dom"



const PrivateRoute = ({component: Component, ...rest}) => {
    
    return(
       <div>
    {sessionStorage.getItem('pokeAuth')? <Route {...rest} component={Component}/> : <Redirect to='/login'/>}
     </div> 
    )
}

export default PrivateRoute