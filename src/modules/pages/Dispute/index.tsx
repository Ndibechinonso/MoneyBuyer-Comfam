import { useEffect } from "react"
import Table from "../../../common/components/CustomTable/Table"
import { useAppDispatch, useAppSelector } from "../../../common/components/redux/hooks"
import { disputeTable } from "../../../fakeData"
import { fetchAllDisputes } from "../../../common/components/redux/disputes/disputesAsyncThunk"

function Dispute() {
  const dispatch = useAppDispatch()
  const { startDate, endDate } = useAppSelector((state) => state.tableFilter);
const {disputes} = useAppSelector((state) => state.disputes)
const {page} = useAppSelector((state) => state.disputes)

  useEffect(() =>{
    dispatch(fetchAllDisputes({page, startDate, endDate}))
  }, [page, endDate])
  
  return (
    <>
      <Table data={disputes} headers={disputeTable.columns} />
  </>
  )
}

export default Dispute