import WalletService from '../service/WalletService'
import { error_occured } from './exceptionActions'

const walletService = WalletService
const wallet_updated = (props) => {
    return (

        {
            type: "WALLET_UPDATED",
            payload: {
                amount: props.amount
            }
        }
    )
}

export const updateWallet = () => {
    return async dispatch => {
        if (sessionStorage.getItem("pokeAuth") != null) {
            try {
                dispatch(wallet_updated(await walletService.updateWallet()))

            } catch (error) {
                error_occured(error.body)
            }
        }
    }
}