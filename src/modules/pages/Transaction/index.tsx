// import NewUserCard from "../../../common/components/sharedCards/NewUserCard"

import Table from "../../../common/components/CustomTable/Table"
import { sellersTransactions } from "../../../fakeData"


function Transaction() {
  // sellersTransactions
  return (
    <>
      {/* <NewUserCard
        completedRegistration={false}
        message={"You currently don’t have any active Transaction."}
      /> */}
      <Table data={sellersTransactions.rows} headers={sellersTransactions.columns} />
    </>
  )
}

export default Transaction