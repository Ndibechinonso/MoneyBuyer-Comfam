import { useEffect } from "react"
import Table from "../../../common/components/CustomTable/Table"
import { useAppDispatch, useAppSelector } from "../../../common/components/redux/hooks"
import { disputeTable } from "../../../fakeData"
import { fetchAllDisputes } from "../../../common/components/redux/disputes/disputesAsyncThunk"

function Dispute() {
  const dispatch = useAppDispatch()
  const { startDate, endDate } = useAppSelector((state) => state.tableFilter);

  useEffect(() =>{
    dispatch(fetchAllDisputes({startDate, endDate}))
  }, [startDate, endDate])
  
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