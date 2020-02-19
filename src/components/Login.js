import React from 'react';

import logo from '../static/images/logo.png'




const Login = (props) => {



    
    

    return (
      <div className="a">
        
        <img className="logo" src={logo}></img>
        <form onSubmit={(event) => props.onSubmit(event)} className="form">
          
         
            <input
              type="text"
              className="user"
              name="username"
              
              placeholder="Username"
              onChange={(e) => props.onChange(e)}
            />
          
         
           
            <input
              type="password"
              className="password"
              name="password"
              
              placeholder="Password"
              onChange={(e) => props.onChange(e)}
            />
          
          {props.failed.message ? <div className="errorContainer"><p className="errorMessage">{props.failed.message}</p></div>:null}
          
          <button type="submit" className="button">
            Login
          </button>

          <a className="register" onClick={() => props.onRegis()} >or Register</a>
         
        </form>
      </div>
    );

}


export default (Login)