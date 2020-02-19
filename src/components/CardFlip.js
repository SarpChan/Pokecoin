import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import cardback from "../static/images/cardback.png"
import "../static/components/cardflip.scss"

const CardFlip = props => {

    const cards = props.pack
    const [isFlipped, flip] =  useState(false)

    const handleClick = () => {
        flip(true)
    }

    return (
        <div >
        <div className="flexContainenr">
            {cards.map((card,index) => {
                return(
                <div className="flipcard" key={index}>
                    <ReactCardFlip isFlipped={isFlipped}>
                        
                            <img src={cardback} onClick={() => handleClick()}></img>
                            <img src ={card.imageUrl} ></img>
                        
                    </ReactCardFlip>
                    
                </div>
                )
            })}

            
        </div>
        <div className="return">
            <button 
                className="return"
                onClick={props.click}
            > Return
            </button>
        </div>
        </div>
    )
}
export default CardFlip