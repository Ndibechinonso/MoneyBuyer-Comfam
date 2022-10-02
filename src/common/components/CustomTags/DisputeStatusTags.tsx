type tagsProps = {
  value: "OPEN" | "IN-PROGRESS" | "RESOLVED";
};

const DisputeStatusTags = ({ value }: any) => {
  let defClassName = "";
  let bodayBg = "";
  if (value !== undefined) {
    if (value.toLocaleLowerCase().includes("open")) {
      defClassName = "brown";
      bodayBg = "darkBrown";
    }

    if (value.toLocaleLowerCase().includes("in-progress")) {
      defClassName = "blue";
      bodayBg = "darkBlue";
    }

    if (value.toLocaleLowerCase().includes("resolved")) {
      defClassName = "green";
      bodayBg = "darkGreen";
    }
  }

  return (
    // <span className={`tags tags__${defClassName}`}>
    //   {value.split("-").join(" ").toLowerCase()}
    // </span>
    <div className={`dispute_status_container__${bodayBg} dispute_status_container`}>
      <div className="dispute_status_container__header">
        <h4>Dispute Status:</h4>
        <span className={`disputeTags tags__${defClassName}`}>
          {value.split("-").join(" ").toLowerCase()}
        </span>
      </div>
      <p className={`dispute_info`}>
        Confam Money is reviewing your dispute with the Seller where your
        purchase was made.We’ve temporarily credited your account until your
        dispute is resolved. Most disputestypically takes up to 48 hours to
        resolve. The seller has up to 24 hours to respond to this disputed
        transaction.
      </p>
    </div>
  );
};

export default DisputeStatusTags;
