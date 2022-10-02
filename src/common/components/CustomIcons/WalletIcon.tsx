import * as React from "react"
import { SVGProps } from "react"

const WalletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="nav_icon"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.879 4.71C2 5.59 2 7.005 2 9.833v6c0 2.828 0 4.243.879 5.121.878.879 2.293.879 5.121.879h10c.93 0 1.395 0 1.776-.102a3 3 0 0 0 2.122-2.122c.102-.381.102-.846.102-1.776h-6a3 3 0 1 1 0-6h6v-2c0-2.828 0-4.243-.879-5.121-.878-.879-2.293-.879-5.121-.879H8c-2.828 0-4.243 0-5.121.879ZM7 7.833a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2H7Z"
      fill="#BDBDBD"
    />
    <path
      d="M17 14.832h-1"
      stroke="#BDBDBD"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
)

export default WalletIcon
