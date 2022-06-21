import DashboardCards from "./index"
import { cardArray } from "../../../../fakeData"
import { formatMoney } from "../../../utils"
const DashboardCardGroup = () => {
    return(
    <div className="dashboard_card_group">
{cardArray.map((card: any, index: number) => {
    return(  
        <div  key={index}>
        <DashboardCards cardImg={card.cardImg} cardTitle={card.cardTitle} amount={formatMoney(card.amount)} />
        </div>
    )
} )}
</div>
    )
}

export default DashboardCardGroup