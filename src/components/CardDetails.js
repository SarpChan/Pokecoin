import React from 'react'
import Card from '../components/Card'



const CardDetails = props => {

    const card = props.item
    


    const renderSuperType =() => {
        switch(card.supertype){
            case "Pokémon":
                return renderPokemonDetails()

            case "Trainer":
                return renderTrainerDetails()
            case "Energy":
                return renderEnergyDetails()
            default:
                return null
        }

    }
    const renderPokemonDetails = () => {
        return (
        <div className="detailContainer">
            <div className="cardDetails">
                    <div className="cardname">Name: <p className="detailTextBox">{card.name}</p></div>
                    <div className="pokedex">Pokedex: <p className="detailTextBox"> {card.nationalPokedexNumber}</p></div>
                    <div className="types">
                        {card.types.map((type, index) => <div key={index} className="type">Type: <p className="detailTextBox"> {type}</p></div>)}
                        </div>
                <div className="weaknesses"> Weaknesses:
                {card.weaknesses ? card.weaknesses.map((weakness, index) => {
                    return (
                        <div className="weakness" key={index}>
                            <div> <p className="detailTextBox"> {weakness.type} {weakness.value}</p></div>
                            
                        </div>)

                }) : null}
                
                </div>
                    <div className="hpContainer">
                        <div className="hp">HP: <p className="detailTextBox">{card.hp}</p></div>
                    </div>
                
                    <div className="evolves">
                        <div className="subtype">Evolution stage: <p className="detailTextBox">{card.subtype}</p></div>
                        {card.evolvesFrom?<div className="evolvesFrom">Evolves from: <p className="detailTextBox">{card.evolvesFrom}</p></div>:null}
                    </div>
                    <div className="rarity">Card rarity: <p className="detailTextBox">{card.rarity}</p></div>
                    
                    <div className="artist">Art by: <p className="detailTextBox">{card.artist}</p></div>
            </div>
            
            <div className="texte">
                
                <div className="abilityContainer">
                        {card.ability ? <div className="ability"><div className="abilityName">Ability: <p className="detailTextBox">{card.ability.name}</p></div>
                    <div className="abilityText">{card.ability.text}</div></div> : null}
                </div>
                <div className="attacks">
                {card.attacks ? card.attacks.map((attack, index) => {
                    return (<div className="attack"key={index}>
                        {attack.damage ? <div className="attackName"> Attack: <p className="detailTextBox">{attack.name} </p> dealing <p className="detailTextBox">{attack.damage}</p> Damage </div> : <div className="attackName"> Attack: <p className="detailTextBox">{attack.name} </p></div>}
                        {attack.text ? <div className="attackText">{attack.text}</div> :null }
                    </div>)

                })

                    : null}
                </div>
            </div>
        </div>)

    }

    const renderTrainerDetails = () => {
        return (
        <div className="detailContainer"> 
            <div className="trainerDetails">
                    <div className="cardname">Name: <p className="detailTextBox">{card.name}</p></div>
                    <div className="rarity">Card rarity: <p className="detailTextBox">{card.rarity}</p></div>
                    <div className="hpContainer">{card.hp ? <div className="hp" >HP : <p className="detailTextBox">{card.hp}</p></div>:null}</div>
                    <div className="artist">Art by: <p className="detailTextBox">{card.artist}</p></div>
                  

            </div>
            <div className="texte">
                <div className="texts">
                    {card.text? 
                    card.text.map((singleText,index) => {
                        return (
                            <div key={index} className="attackText"><p>{singleText}</p></div>
                        )
                    }) : 
                            <div className="text"></div>
                    }   
                
                </div>
            </div>
        </div>)
        

    }

    const renderEnergyDetails = () => {

        return(
            <div className="detailContainer">
                <div className="energyDetails">
                    <div className="cardname">Name: <p className="detailTextBox">{card.name}</p></div>
                    <div className="subtype">Energy type: <p className="detailTextBox">{card.subtype}</p></div>
                    <div className="rarity">Card rarity: <p className="detailTextBox">{card.rarity}</p></div>
                    <div className="artist">Art by: <p className="detailTextBox">{card.artist}</p></div>


                </div>
                {card.text ?<div className="texte">
                    <div className="texts">
                        
                            {card.text.map((singleText, index) => {
                                return (
                                    <div key={index} className="attackText"><p>{singleText}</p></div>
                                )
                            }) }

                    </div>
                </div> : null }
            </div>
        )

    }

    return (
        


        <div className="siteContainer">
            {props.cardid === card.id ? <Card
                usercard={true}
                id={card.id}
                card={card}
                to={`/cards/${card.id}`}
            />: null}
            
            
            {renderSuperType()}
        </div>
    )
}

export default CardDetails