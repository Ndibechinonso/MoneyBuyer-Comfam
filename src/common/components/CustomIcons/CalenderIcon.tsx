import * as React from "react"
import { SVGProps } from "react"

const CalenderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={3.212} y={5} width={15} height={12.5} rx={2} stroke="#BDBDBD" />
    <path
      d="M3.212 8.333c0-1.246 0-1.869.268-2.333a2 2 0 0 1 .732-.732C4.676 5 5.299 5 6.545 5h8.334c1.246 0 1.869 0 2.333.268a2 2 0 0 1 .732.732c.268.464.268 1.087.268 2.333h-15Z"
      fill="#BDBDBD"
    />
    <path
      d="M6.545 2.5V5M14.879 2.5V5"
      stroke="#BDBDBD"
      strokeLinecap="round"
    />
  </svg>
)

export default CalenderIcon
