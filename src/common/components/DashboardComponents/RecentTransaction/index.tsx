import { recentHistoryTable } from "../../../../fakeData";
import { useState } from "react"
import Table from "../../../components/customTable/Table"

const RecentTransaction = () => {
    const [data] = useState(recentHistoryTable.rows);

    return(
        <div className="recent_transactions_history">
<h2>Recent Transaction History</h2>
<Table activeOrder recentTransacionHistory headers={recentHistoryTable.columns} data={data} />

        </div>
    )
}

export default RecentTransaction