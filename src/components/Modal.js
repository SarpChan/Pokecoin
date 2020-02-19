import React from 'react'
import "../static/components/error.scss"

const Modal =(props) => {

    const statusCode = props.statusCode
    const message = props.message
    if(props.show === false){
        return null
    }

    return (
        <div className="backdrop" >
            <div className="modal" >
                <div className="ErrorContainer">
                    <h1 className="ErrorCode">{statusCode ? statusCode : "404"}</h1>
                    <p className="ErrorMessage">{message ? message : "Page Not Found"}</p>
                    <button onClick={() => props.onClick()}>
                        Return to Home
                    </button>
                </div>
                
            </div>
        </div>
    )
}
export default Modal