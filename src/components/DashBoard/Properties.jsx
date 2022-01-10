import React from "react"
import { PropertyData } from "../../views/pages/Data/PropertyData"
import Layout from "../Layout/Layout"

const Properties = () => {
  return (
    <Layout>
      <div className="btn-container-property">
        <h2>Properties</h2>

        <div className="btn">
          <i class="fas fa-plus"></i> Add New Property
        </div>
      </div>
      <PropertyCard />
    </Layout>
  )
}

export default Properties

const PropertyCard = () => {
  return (
    <div>
      <div className="grid-wrapper">
        { PropertyData.map( ( cardData, index ) => {
          return <div key={index} className="grid-card">
            <img src={ cardData.img } alt="" />
            <div className="card-text">
              <h4>{cardData.title }</h4>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
