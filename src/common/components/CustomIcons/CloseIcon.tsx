import * as React from "react"
import { SVGProps } from "react"

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4.848 6.4 2.564-2.564.53-.528a.2.2 0 0 0 0-.283l-.567-.566a.2.2 0 0 0-.282 0L4 5.552.907 2.459a.2.2 0 0 0-.282 0l-.567.566a.2.2 0 0 0 0 .282L3.152 6.4.058 9.493a.2.2 0 0 0 0 .283l.566.566a.2.2 0 0 0 .283 0L4 7.249l2.564 2.564.529.529a.2.2 0 0 0 .282 0l.566-.566a.2.2 0 0 0 0-.283L4.848 6.4Z"
      fill="#F96060"
    />
  </svg>
)

export default CloseIcon
