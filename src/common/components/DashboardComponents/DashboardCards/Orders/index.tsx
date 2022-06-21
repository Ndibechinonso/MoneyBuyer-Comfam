import { Tabs, TabList, Tab, TabPanel } from "react-tabs"
import TableInfo from "../../../customTable/TableInfo"
import { activeOrder } from "../../../../../fakeData"
import { useState } from "react"

const Orders = () => {

  const [data] = useState(activeOrder.rows);


    return(
        <div className="orders_container">
<Tabs>
    <TabList>
      <Tab>Active Order</Tab>
      <Tab>Completed</Tab>
      <Tab>Cancelled</Tab>
    </TabList>

    <TabPanel>
      {/* <Table activeOrder headers={activeOrder.columns} data={data} /> */}
      <TableInfo activeOrder headers={activeOrder.columns} data={data}/>

    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
        </div>
    )
}

export default Orders