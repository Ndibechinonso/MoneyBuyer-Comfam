// import NewUserCard from "../../../common/components/sharedCards/NewUserCard"

import Table from "../../../common/components/CustomTable/Table"
import { disputeTable } from "../../../fakeData"


function Dispute() {
  return (
    <>
    {/* <NewUserCard
        completedRegistration={false}
        message={"No dispute to settle yet"}
      /> */}
      <Table data={disputeTable.rows} headers={disputeTable.columns} />
  </>
  )
}

export default Dispute