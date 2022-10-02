import * as React from "react"
import { SVGProps } from "react"

const DropDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m12 15.934.354.353-.354.354-.354-.354.354-.353Zm6.354-5.647-6 6-.708-.707 6-6 .708.707Zm-6.708 6-6-6 .708-.707 6 6-.708.707Z"
      fill="#4F4F4F"
    />
  </svg>
)

export default DropDownIcon
