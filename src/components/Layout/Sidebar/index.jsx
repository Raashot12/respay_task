/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useRef} from "react"
import Logo from "../../../assets/Images/logo.svg"
import {sidebarNavItem} from "./SidebarData"
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom/cjs/react-router-dom.min"
import ArrowMidForward from "../../../assets/Icon/ArrowMidForward"
import ArrowDownIcon from "../../../assets/Icon/ArrowDownIcon"
import {useGlobalContext} from "../../../store/Context"

const CompanyLogoIcon = () => {
  return (
    <div className="company-logo">
      <img src={Logo} alt="company logo" height="41.48px" width="auto" />
    </div>
  )
}

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key)
    console.log(localStorage, storage)
    if (storage) return JSON.parse(storage).value
    return initialState
  }
  const [value, setValue] = useState(get())
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({value}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  return [value, setValue]
}
const Sidebar = () => {
  const [toggle, setToggle] = useLocalStorage(false, "sidebar")
  const {isSidebarOpen, openSidebar, setIsSidebarOpen} = useGlobalContext()
  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div className={`sidebar sidebar-${isSidebarOpen}`}>
        <CompanyLogoIcon />
        <div className="sidebarItemContainer">
          {sidebarNavItem(true).map(
            ({navName, icon, path, dropDownItem}, index) => {
              if (path === "") {
                return (
                  <>
                    <div>
                      <a
                        exact
                        to={"properties"}
                        key={index}
                        className={`sidebar-item-container ${
                          toggle && "active"
                        }`}
                        onClick={handleToggle}
                      >
                        {icon}
                        <p className="sidebar-text">{navName}</p>
                        {toggle ? (
                          <ArrowDownIcon
                            toggle={toggle}
                            className="arrow-svg"
                          />
                        ) : (
                          <ArrowMidForward
                            toggle={toggle}
                            className="arrow-svg"
                          />
                        )}
                      </a>
                    </div>
                    {toggle && (
                      <>
                        {dropDownItem.map(data => {
                          return (
                            <Link
                              to={data.path}
                              onClick={() => setIsSidebarOpen(false)}
                            >
                              <div className="dropedNav"> {data.items}</div>
                            </Link>
                          )
                        })}
                      </>
                    )}
                  </>
                )
              }
              return (
                <NavLink
                  exact
                  to={path}
                  key={index}
                  className="sidebar-item-container"
                  onClick={() => {
                    setIsSidebarOpen(false)
                  }}
                >
                  {icon}
                  <p className="sidebar-text">{navName}</p>
                </NavLink>
              )
            }
          )}
        </div>
      </div>
      <div
        className={`backdrop-overlay backdrop-overlay-${isSidebarOpen}`}
        onClick={openSidebar}
      ></div>
    </>
  )
}

export default Sidebar
