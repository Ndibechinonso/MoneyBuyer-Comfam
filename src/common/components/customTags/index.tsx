type tagsProps =
  | {
      value:
        | "Pending confirmation"
        | "Pending payment"
        | "Awaiting delivery"
        | "Pending delivery......"
        | "Completed"
        | "Cancelled"
        | "Refunded";
    }
  | {
      value: "Delivered" | "Pending delivery......";
    }
  | {
      value: "Closed" | "Open";
    };

function Tag({ value }: tagsProps) {
  let defClassName = "";
  if (value !== undefined) {
    if (
      value.toLocaleLowerCase().includes("confirmation") ||
      value.toLocaleLowerCase().includes("open")
    ) {
      defClassName = "brown";
    }
    if (value.toLocaleLowerCase().includes("payment")) {
      defClassName = "blue";
    }
    if (value.toLocaleLowerCase().includes("delivery")) {
      defClassName = "silver";
    }
    if (
      value.toLocaleLowerCase().includes("completed") ||
      value.toLocaleLowerCase().includes("delivered") ||
      value.toLocaleLowerCase().includes("closed")
    ) {
      defClassName = "green";
    }
    if (value.toLocaleLowerCase().includes("cancelled")) {
      defClassName = "red";
    }
    if (value.toLocaleLowerCase().includes("refunded")) {
      defClassName = "ocean";
    }
  }

  return (
    <span className={`tags tags__${defClassName}`}>
      {value.split("-").join(" ").toLowerCase()}
    </span>
  );
}

export default Tag;
