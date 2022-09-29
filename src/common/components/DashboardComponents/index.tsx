import {useRef, useEffect} from "react";
import DashboardCardGroup from "../../../common/components/DashboardComponents/DashboardCards/dashboardCardGroup";
import BarChart from "../../../common/components/BarChart";
import ActiveContracts from "../../../common/components/DashboardComponents/ActiveContracts";
import TransactionHistory from "../../../common/components/DashboardComponents/TransactionHistory";
import ClientContact from "../../../common/components/DashboardComponents/ClientContact";
import { useAppDispatch } from "../redux/hooks";
import fetchDashboardSummary from "../redux/dashboard/dashboardAsyncThunk";
const DashboardComponents = () => {
  const dispatch = useAppDispatch();
  const runOnce = useRef(false)
  
  useEffect(() => {
    if(runOnce.current) return
    dispatch(fetchDashboardSummary());
    runOnce.current = true
  }, []);
  return (
    <div className="dashboard_container">
      <DashboardCardGroup />
      <div className="dashboard_container_grid">
        <ActiveContracts />
        <BarChart />
        <TransactionHistory />
        <ClientContact />
      </div>
    </div>
  );
};

export default DashboardComponents;
