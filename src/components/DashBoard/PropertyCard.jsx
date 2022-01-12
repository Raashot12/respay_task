import React from "react"
import {useState} from "react"
import { Link } from "react-router-dom"



const PropertyComponentCard = ( { cardDetails } ) => {

  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  console.log( cardDetails)
  return (
    <div className="grid-card">
      <Link to={ "/property/" + cardDetails?.propertyId }>
        <img src="https://res.cloudinary.com/rashot/image/upload/v1641836224/Rectangle_3_zzbenf.png" alt="" />
      </Link>
      <div className="card-text">
        <div className="card-text-first-section">
          <h4>{ cardDetails?.propertyName}</h4>
          <p>1,000 units</p>
        </div>
        <div className="residential-container">
          <h4>Residential</h4>
          <i
            className={` ${toggle ? "fas fa-chevron-down" : "fas fa-chevron-up"}`}
            onClick={handleToggle}
          ></i>
        </div>
        <div className={`${toggle ? "location-container" : "location-non"}`}>
          <h4>{ toggle ? cardDetails?.address: ""}</h4>
        </div>
      </div>
    </div>
  )
}

export default PropertyComponentCard
