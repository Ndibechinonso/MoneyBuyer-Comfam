import DashboardCards from "./index";
import dashboardCardImg_1 from "../../../../static/images/dashboardCard_1.svg";
import dashboardCardImg_2 from "../../../../static/images/dashboardCard_2.svg";
import dashboardCardImg_3 from "../../../../static/images/dashboardCard_3.svg";
import { useAppSelector } from "../../redux/hooks";

const DashboardCardGroup = () => {
  const { loading, totalTransactions, openTransactions, settledTransactions } =
    useAppSelector((state) => state.dashboardSummary);

  return (
    <div className="dashboard_card_group">
      <div>
        <DashboardCards
          cardImg={dashboardCardImg_1}
          cardTitle="Open Transactions"
          amount={openTransactions}
        />
      </div>
      <div>
        <DashboardCards
          cardImg={dashboardCardImg_2}
          cardTitle="Settled Transactions"
          amount={settledTransactions}
        />
      </div>
      <div>
        <DashboardCards
          cardImg={dashboardCardImg_3}
          cardTitle="Total Transactions"
          amount={totalTransactions}
        />
      </div>
    </div>
  );
};

export default DashboardCardGroup;
