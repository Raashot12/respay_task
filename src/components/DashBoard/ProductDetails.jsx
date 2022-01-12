import React from "react"
import ArrowBackIcon from "../../assets/Icon/ArrowBackIcon"
import Button from "../../Utilities/Button/Button"
import Layout from "../Layout/Layout"
import { useHistory } from "react-router-dom"
const ProductDetails = () => {
  const history = useHistory()

  return (
    <Layout>
      <div onClick={ () => history.push("/dashboard/properties")} className="property-back-page">
        <ArrowBackIcon></ArrowBackIcon>
        <p>Back</p>
      </div>
      <div className="property-detail-row-intro">
        <h3>Property Details</h3>
        <Button buttonText="Action" className="btn-action"></Button>
      </div>
    </Layout>
  )
}

export default ProductDetails

const MainDetailSinglePage = () => {
  return (
    <div>
      <div>

      </div>
      <div>
        
      </div>
    </div>
  )
}