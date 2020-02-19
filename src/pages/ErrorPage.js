import React,{useState} from 'react'
import {
    connect, useSelector
} from "react-redux"
import '../static/components/error.scss'
import Modal from '../components/Modal'
import { useHistory } from 'react-router-dom'


const ErrorPage = props => {

    const switchSite = useHistory()
    const [modalOpen, setOpen] = useState(true)

    const statusCode = useSelector(state => state.ErrorRed.statusCode) 
    const message = useSelector(state => state.ErrorRed.message) 
    
    const toggleModal = () => {
        setOpen(!modalOpen)
    }

    const modalOnClick = () => {
        toggleModal()
        switchSite.push("/login")
    }


return(
    <div className="ErrorPage"> 
        <Modal message={ message } statusCode= {statusCode} show={modalOpen} onClick={() => modalOnClick()} /> 

        

    </div>
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
            dispatch
        }
    })(ErrorPage);