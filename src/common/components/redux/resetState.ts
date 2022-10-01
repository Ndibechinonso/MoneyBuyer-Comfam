import { resetDashboard } from "./dashboard/dashboardSlice"
import { resetDispute } from "./disputes/disputesSlice"
import { resetWallet } from "./fundsAndWallet/fundsAndWalletSlice"
import { resetUser } from "./getUser/getUserSlice"
import { resetMessage } from "./messages/messagesSlice"
import { store } from "./store"
import { resetTransactions } from "./transaction/transactionSlice"


export const resetState = () => {
    store.dispatch(resetUser())
    store.dispatch(resetDashboard())
    store.dispatch(resetMessage())
    store.dispatch(resetWallet())
    store.dispatch(resetTransactions())
    store.dispatch(resetDispute())
}