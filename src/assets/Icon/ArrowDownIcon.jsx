import React from "react"

const ArrowDownIcon = ({toggle, className}) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.59 0.589998L6 5.17L1.41 0.589997L-2.46532e-07 2L6 8L12 2L10.59 0.589998Z"
        fill={toggle ? "":"white"}
      />
    </svg>
  )
}

export default ArrowDownIcon
