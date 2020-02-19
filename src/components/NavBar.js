import React from "react";
import Wallet from "./Wallet";
import { useHistory } from 'react-router-dom'
import "../static/components/navbar.scss"
import {logout} from '../actioncreators/loginActions'
import {
  connect
} from "react-redux"


const NavBar = (props) => {



const switchSites = useHistory()

const logoutCallback = () => {
  switchSites.push("/login")
}


return(

<nav className ="nav">
  <div className="logos">

  </div>
  <div className="links">
      <div className="div">
        <button className="butt" onClick={() => switchSites.push("/home")}> Home </button>
      </div>
      <div className="div">
        <button className="butt" onClick={() => switchSites.push("/cards")}> Cards </button>
      </div>
      <div className="div">
        <button className="butt" onClick={() => switchSites.push("/packs")}> Packs </button>
      </div>
      
  </div>
  
  <div className="walletContainer">

      <div className="div">
        {sessionStorage.getItem("pokeAuth") ? <button className="butt" onClick={() => props.logout(logoutCallback)}> logout </button> : <button className="butt" onClick={() => switchSites.push("/login")}> login </button>} 
      </div>
    
        <Wallet ></Wallet>
    
     
  </div>
    
    
</nav>
)
}

export default connect(
  state => {
    return {
      
      state: state.combineReducers
    }
  },
  dispatch => {
    return {
      logout: (logoutCallback) => logout(logoutCallback)(dispatch),
      dispatch
    }
  })(NavBar);