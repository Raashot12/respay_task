import React from "react"

const ArrowMidForward = ({toggle, className}) => {
  return (
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.523099 1.46049L5.1699 5.98285L0.657688 10.6395L2.08821 12.0287L7.9996 5.94136L1.91228 0.0299663L0.523099 1.46049Z"
        fill={toggle ? "": "white"}
      />
    </svg>
  )
}

export default ArrowMidForward
