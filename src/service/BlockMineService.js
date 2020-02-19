import worker from 'workerize-loader!./worker'; // eslint-disable-line import/no-webpack-loader-syntax
import { hash_accepted, hash_not_accepted } from '../actioncreators/blockActions';
import store from '../store'
import { BlockchainApi } from '../pokeclient'


class BlockMineService{
    
    constructor(){
        this.state = store.getState()
        this.worker = null
        
        this.blockService = new BlockchainApi()


       

        
    
    


    this.kill= () => {
       
        if(this.worker !== null){
            this.worker.terminate()
        }
        
        
           

        
    }

    this.mine = () => {

        
        this.worker = worker()

            
            this.worker.addEventListener('message', (message) => {
                if (message.data.type !== "RPC") {
                    var temp = JSON.parse(message.data)


                    if (temp.type === "BLOCK") {
                        store.dispatch(hash_accepted(temp.payload))

                    } else if (temp.type === "ERROR") {
                        store.dispatch(hash_not_accepted(temp.payload))
                    }
                }


            })

            this.worker.loop(sessionStorage.getItem("pokeAuth"))

        
    }

    this.getLastValidBlock = async () =>  {
        
            return await this.blockService.blockchainLastBlockGet()
            

       
    }

    }
}
const instance = new BlockMineService()

export default instance