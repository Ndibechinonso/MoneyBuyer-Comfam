import Table from "../../../common/components/CustomTable/Table";
import { useAppSelector } from "../../../common/components/redux/hooks";
import { disputeTable } from "../../../fakeData";

const Dispute = () => {
  const { disputes } = useAppSelector((state) => state.disputes);

  return (
    <>
      <Table data={disputes} headers={disputeTable.columns} />
    </>
  );
};

export default Dispute;
