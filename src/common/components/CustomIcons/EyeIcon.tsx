import * as React from "react"
import { SVGProps } from "react"

const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={8} cy={8.567} r={2.167} stroke="#BDBDBD" />
    <path
      d="M13.168 7.515c.396.449.594.674.594 1.051 0 .378-.198.603-.594 1.052C12.124 10.803 10.2 12.566 8 12.566s-4.123-1.763-5.168-2.948c-.396-.45-.594-.674-.594-1.052 0-.377.198-.602.594-1.051C3.877 6.33 5.8 4.566 8 4.566s4.123 1.764 5.168 2.949Z"
      stroke="#BDBDBD"
    />
  </svg>
)

export default EyeIcon
