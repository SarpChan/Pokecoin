import {
    UsersApi
} from '../pokeclient/index'
import LoginBody from '../pokeclient/model/LoginBody'
import RegisterBody from '../pokeclient/model/RegisterBody'
import BlockMineService from './BlockMineService'

class LoginService{

    constructor(){
        this.usersapi = new UsersApi()
        this.blockServ = BlockMineService
        
    }


    async login (username, password) {
        
            
            const response = await this.usersapi
                .authLoginPost(
                    new LoginBody(
                        username,
                        password)
                )
            sessionStorage.setItem("pokeAuth",  response.token)
            
            
         
    }

    async register (username, password) {
        
            const response = await this.usersapi.authRegisterPost(
                new RegisterBody(
                    username,
                    password
                ))
                
            
            

    }


    logout(){
        this.blockServ.kill()
        sessionStorage.removeItem('pokeAuth')
        return true
    }
}


const instance = new LoginService()

export default instance