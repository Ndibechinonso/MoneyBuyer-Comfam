import * as React from "react"
import { SVGProps } from "react"

const ReminderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M13.125.698H1.875C.841.698 0 1.54 0 2.573v8.438c0 1.034.84 1.875 1.875 1.875h2.813v2.46a.35.35 0 0 0 .56.282l3.658-2.742h4.219c1.034 0 1.875-.841 1.875-1.875V2.573C15 1.54 14.16.698 13.125.698Zm.938 10.313a.94.94 0 0 1-.938.937H8.593l-.25.188-2.718 2.039v-2.227h-3.75a.94.94 0 0 1-.938-.937V2.573a.94.94 0 0 1 .938-.937h11.25a.94.94 0 0 1 .938.937v8.438ZM7.5 8.433a.701.701 0 0 0-.703.703c0 .39.313.703.703.703.39 0 .703-.314.703-.703a.701.701 0 0 0-.703-.703Zm-.249-.704h.498a.236.236 0 0 0 .234-.22l.205-3.28a.235.235 0 0 0-.234-.25h-.908a.235.235 0 0 0-.234.25l.205 3.28c.008.124.11.22.234.22Z"
        fill="#ABACB1"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .698)" d="M0 0h15v15H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default ReminderIcon
