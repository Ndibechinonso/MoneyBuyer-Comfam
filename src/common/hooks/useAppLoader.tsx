import { useLocation } from 'react-router-dom'
import { getFirstLevelPath } from '../utils/helpers';
import useLoading from './useLoading';


function useAppLoader() {
    let template: boolean;
    const {pathname} = useLocation();
    const {messageloading,notificationloading,disputeloading,transactionloading} = useLoading()

    switch (getFirstLevelPath(pathname)) {
        // case "messages":
        //     template = messageloading
        //     break;
        case "notifications":
            template = notificationloading
            break;
        // case "dispute":
        //     template = disputeloading
        //     break;
        // case "transaction":
        //     template = transactionloading
        //     break;
    
        default:
            template = false
            break;
    }

  return template
}

export default useAppLoader