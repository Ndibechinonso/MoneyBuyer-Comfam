import * as React from "react"
import { SVGProps } from "react"

const ThreeDotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M10.594 7.188A2.81 2.81 0 0 0 7.781 10a2.81 2.81 0 0 0 2.813 2.813A2.81 2.81 0 0 0 13.407 10a2.81 2.81 0 0 0-2.813-2.813Zm0 4.375a1.562 1.562 0 1 1 0-3.125 1.562 1.562 0 0 1 0 3.124Zm6.875-4.376A2.81 2.81 0 0 0 14.656 10a2.81 2.81 0 0 0 2.813 2.813A2.81 2.81 0 0 0 20.282 10a2.81 2.81 0 0 0-2.813-2.813Zm0 4.375a1.562 1.562 0 1 1 0-3.124 1.562 1.562 0 0 1 0 3.124ZM3.719 7.189A2.81 2.81 0 0 0 .906 10a2.81 2.81 0 0 0 2.813 2.813A2.81 2.81 0 0 0 6.531 10 2.81 2.81 0 0 0 3.72 7.187Zm0 4.375a1.562 1.562 0 1 1 0-3.125 1.562 1.562 0 0 1 0 3.124Z"
        fill="#282828"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.594)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default ThreeDotIcon
