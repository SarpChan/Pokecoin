import crypto from 'crypto'
import AddBlockBody from '../pokeclient/model/AddBlockBody'
import {
     BlockchainApi
} from '../pokeclient/index'






const blockApi = new BlockchainApi()




const checkValidity = (information, pow) => {
    const hash = crypto.createHash('sha256').update(information).digest('hex')
    
    if (hash.startsWith(pow)) {

        return true
    } else {
        return false
    }

}
const sendHash = async (block) => {

    try {
        const response = await blockApi.blockchainBlocksPost(
            AddBlockBody.constructFromObject(block)
        )
        postMessage(JSON.stringify({type: "BLOCK",payload: response}))
    } catch (error) {
        postMessage(JSON.stringify({ type: "ERROR", payload: error}))
        
    }


}
const getPreviousHash = async () => {

    try {
        const response = await blockApi.blockchainLastBlockGet()

        return response.hash
    } catch (error) {
        postMessage(JSON.stringify({ type: "ERROR", payload: error }))
    }





}

const getPow = async () => {
    try {
        const response = await blockApi.blockchainCurrentDifficultyGet()
        var temp = ""
        var i = 0
        for (i = 0; i < parseInt(response); i++) {
            temp += "0"
        }
        return temp
    } catch (error) {
        postMessage(JSON.stringify({ type: "ERROR", payload: error}))
    }



}

export const loop = async (authkey) => {
    
    
    blockApi.apiClient.authentications.token.apiKey = authkey
    
    const pow = await getPow()
    var previousHash = await getPreviousHash()
    const data = "Ich will der Allerbeste sein"
    
    
    while(true){
        var nonce = 0
        var timestamp = Date.now()

        postMessage(JSON.stringify({ type: "INFO", payload: timestamp }))

        while (nonce < Number.MAX_SAFE_INTEGER) {



            const information = (
                previousHash +
                timestamp.toString() +
                data +
                nonce.toString()
            )



            if (checkValidity(information, pow)) {

                const block = {
                    previousHash: previousHash,
                    timestamp: timestamp,
                    data: data,
                    nonce: nonce
                }

                await sendHash(block)
                nonce = 0
                timestamp = Date.now()
                setTimeout(() => { }, 2000)
                previousHash = await getPreviousHash()


            }
            nonce += 1

        }
        
    }


    
        
}


