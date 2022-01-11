import React from "react"
import {useState} from "react"

const PropertyComponentCard = ({title, unit, location, img}) => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className="grid-card">
      <img src={img} alt="" />
      <div className="card-text">
        <div className="card-text-first-section">
          <h4>{title}</h4>
          <p>{unit}</p>
        </div>
        <div className="residential-container">
          <h4>Residential</h4>
          <i
            class={` ${toggle ? "fas fa-chevron-down" : "fas fa-chevron-up"}`}
            onClick={handleToggle}
          ></i>
        </div>
        <div className={`${toggle ? "location-container" : "location-non"}`}>
          <h4>{toggle ? location: ""}</h4>
        </div>
      </div>
    </div>
  )
}

export default PropertyComponentCard
