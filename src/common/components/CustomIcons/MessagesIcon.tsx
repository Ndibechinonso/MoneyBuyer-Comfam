import * as React from "react";
import { SVGProps } from "react";

const MessagesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="nav_icon"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.64844C7.02944 3.64844 3 7.67788 3 12.6484C3 17.619 7.02944 21.6484 12 21.6484H16.5C17.8978 21.6484 18.5967 21.6484 19.1481 21.4201C19.8831 21.1156 20.4672 20.5316 20.7716 19.7965C21 19.2452 21 18.5463 21 17.1484V12.6484C21 7.67788 16.9706 3.64844 12 3.64844ZM8 11.6484C8 11.0962 8.44772 10.6484 9 10.6484H15C15.5523 10.6484 16 11.0962 16 11.6484C16 12.2007 15.5523 12.6484 15 12.6484H9C8.44772 12.6484 8 12.2007 8 11.6484ZM11 15.6484C11 15.0962 11.4477 14.6484 12 14.6484H15C15.5523 14.6484 16 15.0962 16 15.6484C16 16.2007 15.5523 16.6484 15 16.6484H12C11.4477 16.6484 11 16.2007 11 15.6484Z"
      fill="#BDBDBD"
    />
  </svg>
);

export default MessagesIcon;