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
      <div className="orders_container_table">
      <TableInfo activeOrder headers={activeOrder.columns} data={data}/>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="orders_container_table">
      <TableInfo activeOrder headers={activeOrder.columns} data={data}/>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="orders_container_table">
      <TableInfo activeOrder headers={activeOrder.columns} data={data}/>
      </div>
    </TabPanel>
  </Tabs>
        </div>
    )
}

export default Orders