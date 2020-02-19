import React from 'react'
import { Link } from 'react-router-dom'
import packImage from '../static/images/base.png'
import pokecoin from '../static/images/pokecoin.png'

import '../static/components/cardPackPage.scss'



const Cardpack = (props) => {

    
    return (
        
            <div className="polaroid">
            <Link className="polaroid" to={props.to}>
                <img src={packImage} alt='failed'></img>
            </Link>
                <div className="container">
                    <p>{props.id}</p>
                {props.logged === true? 
                    <div className={`overlay ${props.enoughCoins ? "" : "notEnoughCoins"}`} onClick={props.enoughCoins ? () => props.onClick():null}>
                        <div className="textCont"> <p className="text">{props.enoughCoins ? "Buy for "  : "Not enough coins " }{props.packageCost}<img className="coin" src={pokecoin}></img></p> </div>
                </div>: null}
                    
                </div>
            
                
            </div>

       
    )
}
export default Cardpack