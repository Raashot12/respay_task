import React from "react"
import Nofitication from "../../../assets/Icon/Nofitication"
import SearchIcon from "../../../assets/Icon/SearchIcon"
import { useGlobalContext } from "../../../store/Context"

const Navbar = () => {
  const { openSidebar } = useGlobalContext()
  return (
    <div className="navbar" >
      <i className="fas fa-bars" onClick={ openSidebar }></i>
      <div className="nav-items-container">
        <div className="search-container">
         
            <input
              type="search"
              placeholder="Search"
              className="input-element"
            />
       

          <div className="search-icon-container">
            <SearchIcon />
          </div>
        </div>
        <Nofitication />
        <div className="profile-data">
          <div>
            <img
              src="https://res.cloudinary.com/rashot/image/upload/v1641832196/Ellipse_1_1_izkv8s.png"
              alt=""
            />
          </div>
          <div>
            <h4 className="name">Seyi Martins</h4>
            <p className="description">Property Owner</p>
          </div>
        </div>
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  )
}

export default Navbar
