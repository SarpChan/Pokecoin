import { CardsApi} from "../pokeclient";




class CardPackService {
    constructor() {
        this.cardsApi = new CardsApi()
        
        
    }

    async getPackNames(){
            return await this.cardsApi.cardsPackagesGet()
            
    }


    async getPackCost(){
       
            return await this.cardsApi.cardsPackagesCurrentPackageCostGet()
        
    }
  

    async getCard(cardId){
        const response = await this.cardsApi.cardsCardIdGet(cardId)
        
        return response 
    }

    

    async getAllCards(){
        
        return await this.getCardsRecursive(0, [])
           

    }

    async getCardsRecursive(pageNum, liste){
       
        const response = await this.cardsApi.cardsGet({ page: pageNum })

        if (response.cards.length !== 0) {

            liste.push(...response.cards)
            

            return await this.getCardsRecursive(++pageNum, liste)
        } else {
            return liste
        }

        


    }

    async getUserCards(){
       
            this.cardsApi.apiClient.authentications.token.apiKey = sessionStorage.getItem("pokeAuth")
            
            return await this.cardsApi.cardsUsercardsGet()
            
            
        
    }

    async buyPack(packname){
        
            return await this.cardsApi.cardsPackagesCardPackNameBuyDefaultPackageGet(packname)

            
        
        
    }


}

const instance = new CardPackService()

export default instance