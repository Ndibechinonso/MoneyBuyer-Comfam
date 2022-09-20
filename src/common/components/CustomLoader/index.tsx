import React from "react";

type Props = {
  size: number;
};

function CustomLoader({ size }: Props) {
  return (
    <span className="loadercontainer" style={{ fontSize: size }}>
      <span className="loader" />
    </span>
  );
}

export default CustomLoader;
