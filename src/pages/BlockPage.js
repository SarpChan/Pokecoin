import React,{useEffect} from 'react'
import {useSelector, connect} from 'react-redux'
import {setMining, getPrevBlock} from '../actioncreators/blockActions'
import BlockAnimation from '../components/BlockAnimation'
import Modal from '../components/Modal'
import "../static/components/blockpage.scss"
import { useHistory } from 'react-router-dom'
import { errorResolved } from '../actioncreators/exceptionActions'




const BlockPage = (props) => {

    const switchSite = useHistory()
    const mining = useSelector((state) => state.MiningRed.mining )
    const lastBlock = useSelector(state => state.MiningRed.lastValid)
    const foundBlock = useSelector(state => state.MiningRed.found) 
    const hashWasAccepted = useSelector(state => state.MiningRed.accepted)
    const unaccHash = useSelector(state => state.MiningRed.errorMessage )
    const modalOpen = useSelector(state => state.ErrorRed.modal)
    const error = useSelector(state => state.ErrorRed)

    
    
    document.addEventListener("blur", () => {
        if (document.hasFocus() === false) {
            props.setMining(false, mining)
        }
    })
  
    const cleanup = () => {
       props.setMining(false, mining)
    }

    useEffect(() => {

        
        if(lastBlock.hash == null){
            props.getPrevBlock()
        }
        
        
        return cleanup()
    },[])

    useEffect(() => {
        if(foundBlock.block != null || unaccHash ){
            props.getPrevBlock()
        }
        
    },[foundBlock,unaccHash])

    const modalOnClick = () => {

        if (error.to) {
            switchSite.push(error.to)
        }
        props.errorResolved()
    }
    
    

    return (
        
        <div>
            {modalOpen ? <Modal statusCode={error.statusCode} message={error.message} show={modalOpen} onClick={() => modalOnClick()} /> : 
        <div className="pageContainer">
            
           
            {mining && document.visibilityState === 'visible'? <div className="animationContainer"><BlockAnimation></BlockAnimation> </div> : <div className="animationContainer"> </div>}
            
            {foundBlock.block? 
                <div className="foundBlock">
               
                <div>
                    <p> You successfully found Block: {foundBlock.block.hash}</p>
                    <p> You got {foundBlock.transaction.amount} coin(s) for that Block!</p>
                            <p> You found this Block at {new Date(parseInt(foundBlock.transaction.timestamp)).toLocaleTimeString()} {new Date(parseInt(foundBlock.transaction.timestamp)).toLocaleDateString()}</p>

                </div> 
                
                </div>
                : 
                <div className="foundBlock">
                    {hashWasAccepted ? <p> You have not yet found a Block during this session</p>: <p>{unaccHash}</p>}
                </div>}
            
                {lastBlock.hash ?
                    <div className="lastBlock">
                        <p>The last valid Block is {lastBlock.hash}</p>
                        <p>It was found by {lastBlock.foundByUser.username} with the message {lastBlock.data}</p>
                    </div>
                    : null}
        
            
            
            <button className="mineButton" onClick={ () => props.setMining(!mining, mining)}>
                    {mining? "Stop Mining" :"Start Mining"} <span className="badge badge-primary"></span>
            </button>

            
            
        </div>
        }
        </div>
        
    )
}

export default connect(
    state => {
        return {
            state: state.MiningRed
        }
    },
    dispatch => {
        return {
            errorResolved: () => errorResolved()(dispatch),
            setMining: (value, mining) => setMining(value,mining)(dispatch),
            getPrevBlock: () => getPrevBlock()(dispatch),
            dispatch
        }
    })(BlockPage);