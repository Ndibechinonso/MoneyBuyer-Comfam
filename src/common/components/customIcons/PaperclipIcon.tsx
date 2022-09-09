import * as React from "react"
import { SVGProps } from "react"

const PaperclipIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.099 19.888H10.318c-2.327 0-4.398-1.7-4.621-4.012C5.44 13.232 7.523 11 10.129 11H23.89c1.459 0 2.784 1.044 2.929 2.489a2.78 2.78 0 0 1-2.773 3.066H12.355c-.612 0-1.113-.5-1.113-1.11 0-.612.501-1.112 1.113-1.112H22.1a.84.84 0 0 0 .835-.833.84.84 0 0 0-.835-.834H12.51c-1.458 0-2.783 1.045-2.928 2.49a2.78 2.78 0 0 0 2.772 3.066h11.503c2.327 0 4.398-1.7 4.62-4.011a4.44 4.44 0 0 0-4.43-4.878H10.384c-3.196 0-6.058 2.333-6.358 5.511a6.122 6.122 0 0 0 6.102 6.711h11.97a.84.84 0 0 0 .835-.833.84.84 0 0 0-.835-.833Z"
      fill="#BDBDBD"
    />
  </svg>
)

export default PaperclipIcon