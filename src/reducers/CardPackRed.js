

const initialState = {
    usercards : [],
    cards : [],
    packs: [],
    viewedCard: null,
    packageCost: Number.POSITIVE_INFINITY,
    bought: false,
    lastBought: {
        name: null,
        cards:[]
    }

}

const CardPackRed = (state = initialState, action) => {

    switch(action.type){
        case 'OPENED_PACK':
            return Object.assign({}, state, {
                bought: false
            })
        case 'GOT_PACKS':
            

            return Object.assign({},state,{
                
                packs: action.payload.map( temp => {
                    return {
                        name: temp.name,
                        id: temp.id,
                        cards: []
                    }
                })
            })

        case 'GOT_PACK':
            
            var temp = state.packs

            temp.forEach((item, index) => {
                if (item.name === action.payload.name){
                    
                    state.packs[index].cards = action.payload.cards
                }
            })
            return state
        
        case 'GOT_CARDS':

            var temp2 = state.cards
            
            temp.push(...action.payload.cards)
            
            return Object.assign({}, state, {
                cards: temp2
            })

        case 'GOT_USERCARDS':
                
            
            return Object.assign({}, state, {
                usercards: action.payload.cards
            })

        case 'GOT_ALL_CARDS':

            return Object.assign({}, state, {
                cards : action.payload
            })

        case 'BOUGHT_PACK':

        return Object.assign({},state,{

            lastBought: {
                
                name: action.payload.name,
                cards: action.payload.cards
                
            },
            bought: true
        })

        case 'GOT_PACKAGE_COST':
            return Object.assign({}, state, {
                packageCost : action.payload
            })

        case 'GOT_CARD':
            
            return Object.assign({}, state,{
                viewedCard: action.payload
            } )
        case 'ERROR':
            if(action.payload.statusCode){
                return initialState
            } else {
                return state
            }

        case 'LOGGED_OUT':
            return Object.assign({}, state, initialState)

        default:
            return state
    }
}

export default CardPackRed