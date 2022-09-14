import React from "react";

type Props = {
  size: number;
};

function CustomLoader({ size }: Props) {
  return (
    <div className="loadercontainer" style={{ fontSize: size }}>
      <div className="loader" />
    </div>
  );
}

export default CustomLoader;
