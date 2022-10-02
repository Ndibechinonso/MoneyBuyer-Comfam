import * as React from "react"
import { SVGProps } from "react"

const IndicatorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-8-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 9v-6h-2v6h2Z"
      fill="#FFC00E"
    />
  </svg>
)

export default IndicatorIcon
