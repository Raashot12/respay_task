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
        <section className="card-detail-one">
          <img src="https://res.cloudinary.com/rashot/image/upload/v1642007572/unsplash_2d4lAQAlbDA_usqkpc.png" alt="" width="100%" height="auto" />
          <div>
            <h3 className="top-court">Top Court Garden</h3>
            <p className="paragraph-one">24, Roland Road, Challenge, Ibadan, Oyo, NG</p>
            <p className="paragraph-two">Property Type : Residential</p>
            <p className="paragraph-three">Property Sub-Type : Semi- Detached</p>
          </div>
        </section>
        <section className="card-detail-two">
          <div className="img-text-container">
          <div>
            <img src="https://res.cloudinary.com/rashot/image/upload/v1642007563/unsplash_MP0bgaS_d1c_bfy5ak.png" alt="" width="100%" height="auto"/>
          </div>
          <div>
            <img src="https://res.cloudinary.com/rashot/image/upload/v1642007553/unsplash_L7EwHkq1B2s_ha45pr.png" className="second-img"alt="" width="100%" height="auto"/>
            </div>
            <p>View all images</p>
          </div>
          <h3 className="amenities">Amenities</h3>
        </section>
      </div>
    </div>
  )
}