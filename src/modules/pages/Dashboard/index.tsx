// import NewUserCard from "../../../common/components/sharedCards/NewUserCard";
// import { language } from "../../../common/utils/language/en";
import DashboardCardGroup from "../../../common/components/DashboardComponents/DashboardCards/dashboardCardGroup";
// import Chart from "../../../common/components/Chart";
// import { useState, useEffect } from "react";

import 'chart.js/auto';
// import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import BarChart from "../../../common/components/BarChart";
import ActiveContracts from "../../../common/components/DashboardComponents/ActiveContracts";
import TransactionHistory from "../../../common/components/DashboardComponents/TransactionHistory";
import ClientContact from "../../../common/components/DashboardComponents/ClientContact"

// const { newUser: NewUserPageDictionary } = language.dashboard;

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

function Dashboard() {

 

  return (
    <div className="dashboard_container">
      {/* <NewUserCard
        completedRegistration={false}
        message={NewUserPageDictionary.message}
      /> */}
      {/* <DashboardCardGroup /> */}
      <div className="dashboard_container_grid">
{/* <ActiveContracts />
<BarChart />  
<TransactionHistory />
<ClientContact /> */}
{/* <RecentTransaction /> */}
</div>
    </div>
  );
}

export default Dashboard;
