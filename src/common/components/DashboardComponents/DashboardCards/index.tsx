import { useAppSelector } from "../../redux/hooks";
import CustomLoader from "../../CustomLoader";

type DashboardCardsProps = {
  cardImg: string;
  cardTitle: string;
  amount: number;
};
const DashboardCards = ({
  cardImg,
  cardTitle,
  amount,
}: DashboardCardsProps) => {
  const { loading } = useAppSelector((state) => state.dashboardSummary);
  return (
    <div className="dashboard_cards_container">
      <div>
        <img src={cardImg} alt="" />
      </div>
      <div className="text_content">
        <p className="card_title">{cardTitle}</p>
        <div className="flexRowCenter">
        {loading ? <CustomLoader size={3} /> : <p className="amount">{amount || 0}</p> }
        </div>
      </div>
   
    </div>
  );
};

export default DashboardCards;
