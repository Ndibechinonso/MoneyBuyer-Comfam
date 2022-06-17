
type DashboardCardsProps = {
    cardImg: string;
    cardTitle: string;
    amount: number
}
const DashboardCards = ({cardImg, cardTitle, amount}: DashboardCardsProps) => {
    return(
        <div className="dashboard_cards_container">
<div><img src={cardImg} alt="" /></div><div className="text_content"><p className="card_title">{cardTitle}</p><p className="amount">{amount}</p></div>
        </div>
    )
}

export default DashboardCards