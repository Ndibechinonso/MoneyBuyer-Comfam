import React from "react";
import Tabs from "../../../common/components/CustomTable/Table";
import { deliveryTable } from "../../../fakeData";

function Delivery() {
  const [data] = React.useState(deliveryTable.rows);

  return (
    <>
      <Tabs headers={deliveryTable.columns} data={data} />
    </>
  );
}

export default Delivery;
