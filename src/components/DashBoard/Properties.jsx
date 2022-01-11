import React, { useState } from "react"
import { PropertyData } from "../../views/pages/Data/PropertyData"
import Layout from "../Layout/Layout"
import PropertyComponentCard from "./PropertyCard"

const Properties = () => {
  return (
    <Layout>
      <div className="btn-container-property">
        <h2>Properties</h2>
        <div className="btn">
          <i class="fas fa-plus"></i> Add New Property
        </div>
      </div>
      <div className="grid-wrapper">
        { PropertyData.map( ( cardData, index ) => {
          return (
           <PropertyComponentCard {...cardData} key={index} />
          )
        } ) }
      </div>
    </Layout>
  )
}

export default Properties

