import {WalletApi } from "../pokeclient"

class WalletService {
    constructor() { this.walletApi = new WalletApi()
    }
    async updateWallet (){
        
        this.walletApi.apiClient.authentications.token.apiKey = sessionStorage.getItem("pokeAuth")
        
        const response = await this.walletApi.walletBalanceGet()
        
        return response
    }
}
const instance = new WalletService()

export default instance