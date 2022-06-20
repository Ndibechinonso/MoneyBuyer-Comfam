import * as React from "react"
import { SVGProps } from "react"

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle opacity={0.7} cx={9} cy={9.617} r={9} fill="#000" />
    <path
      d="m9.681 9.617 2.06-2.06.426-.426a.16.16 0 0 0 0-.227l-.455-.454a.16.16 0 0 0-.227 0L9 8.935 6.514 6.449a.16.16 0 0 0-.227 0l-.455.455a.16.16 0 0 0 0 .227l2.486 2.486-2.486 2.485a.16.16 0 0 0 0 .227l.455.455a.16.16 0 0 0 .227 0L9 10.299l2.06 2.06.425.425a.16.16 0 0 0 .227 0l.455-.455a.16.16 0 0 0 0-.227L9.68 9.617Z"
      fill="#fff"
    />
  </svg>
)

export default CloseIcon
