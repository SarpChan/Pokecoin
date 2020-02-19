import React from 'react'
import {Link} from 'react-router-dom'

import Tilt from "react-parallax-tilt"

const Card = props => {

    const card = props.card
    
    
    

    return(
        <div className="card">

        <Tilt
            className="parallax-effect-scale"
            perspective={500}
            glareEnable={false}
            glareMaxOpacity={0.45}
            scale={1.25}
            gyroscope={false}
            
            
        >
            
                
            <Link
                to={props.to}>
            
                    <img src={card.imageUrl} className={props.className || 'usercard'} /> 
                
                


            </Link>
                
            
            
        </Tilt>
        </div >
        
    )
}
export default Card