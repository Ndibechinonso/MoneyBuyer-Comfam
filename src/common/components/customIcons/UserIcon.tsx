import * as React from "react"
import { SVGProps } from "react"

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M9.188 9.136c-.841 0-1.246.468-2.626.468s-1.78-.468-2.625-.468A3.938 3.938 0 0 0 0 13.073v1.219c0 .776.63 1.406 1.406 1.406H11.72c.776 0 1.406-.63 1.406-1.406v-1.219a3.939 3.939 0 0 0-3.938-3.937Zm3 5.156a.47.47 0 0 1-.47.469H1.407a.47.47 0 0 1-.468-.469v-1.219c0-1.655 1.344-3 3-3 .574 0 1.145.469 2.624.469 1.477 0 2.051-.469 2.625-.469 1.656 0 3 1.345 3 3v1.219ZM6.561 8.198a3.75 3.75 0 1 0 .001-7.5 3.75 3.75 0 0 0 0 7.5Zm0-6.562a2.817 2.817 0 0 1 2.813 2.812 2.817 2.817 0 0 1-2.813 2.813A2.817 2.817 0 0 1 3.75 4.448a2.817 2.817 0 0 1 2.813-2.812Z"
        fill="#ABACB1"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .698)" d="M0 0h13.125v15H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default UserIcon
