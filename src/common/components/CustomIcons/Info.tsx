import * as React from "react"
import { SVGProps } from "react"

const InfoIcon
 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0ZM8.667 5.333a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Zm-.167 6v-4h-1v4h1Z"
      fill="#4F4F4F"
    />
  </svg>
)

export default InfoIcon

