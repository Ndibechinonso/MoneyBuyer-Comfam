import * as React from "react";
import { SVGProps } from "react";

const DoneAllIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1.333 9.833 1.9 1.425a1 1 0 0 0 1.374-.167L10 4.5"
      stroke="#333"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m7.47 11.516.112.09a1.5 1.5 0 0 0 2.098-.222l5.374-6.567a.5.5 0 0 0-.774-.634l-5.374 6.568a.5.5 0 0 1-.699.074l-.104-.083-.633.774Z"
      fill="#333"
    />
  </svg>
);

export default DoneAllIcon;
