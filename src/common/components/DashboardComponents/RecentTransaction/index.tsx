import { useState } from "react"
import { recentHistoryTable } from "../../../../fakeData"; 
import TableInfo from "../../../components/customTable/TableInfo"


const RecentTransaction = () => {
    const [data] = useState(recentHistoryTable.rows);

    return(
        <div className="recent_transactions_history">
           
<h2>Recent Transaction History</h2>
<div className="orders_container_table">
<TableInfo activeOrder recentTransacionHistory headers={recentHistoryTable.columns} data={data}/>
</div>
        </div>
    )
}

export default RecentTransaction