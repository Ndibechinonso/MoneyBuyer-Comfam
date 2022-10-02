import * as React from "react"
import { SVGProps } from "react"

const WarningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="2rem"
    height="2rem"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Zm-10.667-5.333a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Zm-.333 12v-8h-2v8h2Z"
      fill="#FF5050"
    />
  </svg>
)

export default WarningIcon
