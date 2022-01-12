import React from "react"
import ArrowBackIcon from "../../assets/Icon/ArrowBackIcon"
import Button from "../../Utilities/Button/Button"
import Layout from "../Layout/Layout"

const ProductDetails = () => {
  return (
    <Layout>
      <div>
        <ArrowBackIcon></ArrowBackIcon>
        <p>Back</p>
      </div>
      <div>
        <h3>Property Details</h3>
        <Button buttonText="Action"></Button>
      </div>
    </Layout>
  )
}

export default ProductDetails
