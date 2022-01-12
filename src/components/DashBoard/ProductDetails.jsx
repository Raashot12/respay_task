import React from "react"
import ArrowBackIcon from "../../assets/Icon/ArrowBackIcon"
import Button from "../../Utilities/Button/Button"
import Layout from "../Layout/Layout"
import { useHistory } from "react-router-dom"
const ProductDetails = () => {
  const history = useHistory()

  return (
    <Layout>
      <div onClick={ () => history.push( "/dashboard/properties" ) } className="property-back-page">
        <ArrowBackIcon></ArrowBackIcon>
        <p>Back</p>
      </div>
      <div className="property-detail-row-intro">
        <h3>Property Details</h3>
        <Button buttonText="Action" className="btn-action"></Button>
      </div>
      <MainDetailSinglePage />
    </Layout>
  )
}

export default ProductDetails

const MainDetailSinglePage = () => {
  return (
    <div className="container-maindetail-single-page">
      <div className="container-flex-details">
        <section>
          <img src="https://res.cloudinary.com/rashot/image/upload/v1642007572/unsplash_2d4lAQAlbDA_usqkpc.png" alt="" />
          <div>
            <h3>Top Court Garden</h3>
            <p>24, Roland Road, Challenge, Ibadan, Oyo, NG</p>
            <p>Property Type : Residential</p>
            <p>Property Sub-Type : Semi- Detached</p>
          </div>
        </section>
        <section>
          <div>
            <img src="https://res.cloudinary.com/rashot/image/upload/v1642007563/unsplash_MP0bgaS_d1c_bfy5ak.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/rashot/image/upload/v1642007553/unsplash_L7EwHkq1B2s_ha45pr.png" alt="" />
          </div>
        </section>
      </div>
    </div>
  )
}