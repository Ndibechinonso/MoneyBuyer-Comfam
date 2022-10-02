import * as React from "react"
import { SVGProps } from "react"

const TransactionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="nav_icon"
    {...props}
  >
    <path
      d="M23.25 9.833a.75.75 0 0 1-.218.532l-4.5 4.5a.75.75 0 0 1-.532.218.75.75 0 0 1-.285-.053.75.75 0 0 1-.465-.697v-2.25H10.5a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h6.75v-2.25a.75.75 0 0 1 1.282-.525l4.5 4.5a.75.75 0 0 1 .218.525Zm-9.75 3.75H6.75v-2.25a.75.75 0 0 0-.465-.69.75.75 0 0 0-.817.157l-4.5 4.5a.75.75 0 0 0-.218.533.75.75 0 0 0 .218.532l4.5 4.5a.75.75 0 0 0 1.154-.117.75.75 0 0 0 .128-.415v-2.25h6.75a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75Z"
      fill="#BDBDBD"
    />
  </svg>
)

export default TransactionIcon
