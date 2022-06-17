// import NewUserCard from "../../../common/components/sharedCards/NewUserCard";
import { language } from "../../../common/utils/language/en";
import DashboardCardGroup from "../../../common/components/DashboardCards/dashboardCardGroup";

const { newUser: NewUserPageDictionary } = language.dashboard;

function Dashboard() {
  return (
    <>
      {/* <NewUserCard
        completedRegistration={false}
        message={NewUserPageDictionary.message}
      /> */}
      <DashboardCardGroup />
    </>
  );
}

export default Dashboard;
