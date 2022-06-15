import * as React from "react"
import { SVGProps } from "react"

const ThrashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M7.929 11.714h.428a.214.214 0 0 0 .214-.214V4.214A.214.214 0 0 0 8.357 4H7.93a.214.214 0 0 0-.215.214V11.5a.214.214 0 0 0 .215.214Zm-4.286 0h.428a.214.214 0 0 0 .215-.214V4.214A.214.214 0 0 0 4.07 4h-.428a.214.214 0 0 0-.214.214V11.5a.214.214 0 0 0 .214.214Zm8.143-9.857H9l-.9-1.2A1.286 1.286 0 0 0 7.071.143H4.93A1.286 1.286 0 0 0 3.9.657l-.9 1.2H.214A.214.214 0 0 0 0 2.07V2.5a.214.214 0 0 0 .214.214h.643v9.857a1.286 1.286 0 0 0 1.286 1.286h7.714a1.286 1.286 0 0 0 1.286-1.286V2.714h.643A.214.214 0 0 0 12 2.5V2.07a.214.214 0 0 0-.214-.214Zm-7.2-.686A.431.431 0 0 1 4.929 1H7.07a.431.431 0 0 1 .343.171l.515.686H4.07l.515-.686Zm5.7 11.4a.429.429 0 0 1-.429.429H2.143a.428.428 0 0 1-.429-.429V2.714h8.572v9.857Zm-4.5-.857h.428a.214.214 0 0 0 .215-.214V4.214A.214.214 0 0 0 6.214 4h-.428a.214.214 0 0 0-.215.214V11.5a.214.214 0 0 0 .215.214Z"
        fill="#F96060"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .143)" d="M0 0h12v13.714H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default ThrashIcon