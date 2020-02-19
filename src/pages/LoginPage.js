import React, { useState } from "react"
import Login from '../components/Login'
import {login, register} from "../actioncreators/loginActions"
import {
  connect,useSelector
} from "react-redux"
import {useHistory} from 'react-router-dom'
import "../static/components/login.scss"




const LoginPage = (props) => {

  
  const switchToHome = useHistory()
  const fehler = useSelector(state => state.LoginReducer.failed)
  const [input, setInput] = useState({});
  const callback =  () => {
    switchToHome.push("/home")
  }


   
    const onChange = e => {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
    };

    const onSubmit = e => {
      
      e.preventDefault();
      props.login(input, callback)
    }

    

    

    return (
        <div className="loggrid">
            <Login onRegis={() => props.register(input,callback)} onSubmit={event => onSubmit(event)} onChange = {(e) => onChange(e)} failed={fehler.message?fehler:false}></Login>
        </div>
    )
}
export default connect(
  state => {
    return {
      state: state.LoginReducer
    }
  },
  dispatch => {
    return {
      login: (input, callback) => login(input, callback)(dispatch),
      register:(input, callback) => register(input, callback)(dispatch),
      dispatch
    }
  }) (LoginPage);