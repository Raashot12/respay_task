import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"


const Layout = ( { children } ) => {
  return (
    <div>
      <div class="main-content-wrapper">
        <Navbar />
        <Sidebar />
        <main className="content-page-box-area" tabIndex="-1" role="main">
          { children }
        </main>
      </div>
    </div>
  )
}

export default Layout
