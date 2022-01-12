import React, { useEffect } from "react"
import ArrowBackIcon from "../../assets/Icon/ArrowBackIcon"
import Button from "../../Utilities/Button/Button"
import Layout from "../Layout/Layout"
import Spinner from "react-spinkit"
import { useDispatch, useSelector } from "react-redux";
import { detailsProperty } from "../../store/actions/propertyActions"
const ProductDetails = ( props ) => {
  const slug = props.match.params.slug
  const productListDetails = useSelector( ( state ) => state.propertyDetails );
  const dispatch = useDispatch();
  const { property, loading, error } = productListDetails || {};
  useEffect( () => {
    dispatch( detailsProperty( slug ) );
  }, [dispatch, slug] );


  const renderedComponent = loading ? <div style={ { margin: "4rem auto", paddingLeft: "50%", paddingRight: "50%" } }>
    <Spinner name="circle" style={ { height: 60 } } color="#038618" />
  </div> : error ? <>
    <h1 className="error-message">{ error }! Please check your connection</h1>
  </> : <>
    <MainDetailSinglePage property={ property } />
    <MainDetailPageData property={ property } />
  </>
  return (
    <Layout>
      <div onClick={ () => props.history?.push( "/dashboard/properties" ) } className="property-back-page">
        <ArrowBackIcon></ArrowBackIcon>
        <p>Back</p>
      </div>
      <div className="property-detail-row-intro">
        <h3>Property Details</h3>
        <Button buttonText="Action" className="btn-action" onClick={ () => alert( "Feature coming soon" ) }></Button>
      </div>
      { renderedComponent }
    </Layout>
  )
}

export default ProductDetails

const MainDetailSinglePage = ( { property } ) => {
  return (
    <div className="container-maindetail-single-page">
      <div className="container-flex-details">
        <section className="card-detail-one">
          <img src="https://res.cloudinary.com/rashot/image/upload/v1642007572/unsplash_2d4lAQAlbDA_usqkpc.png" alt="" width="100%" height="auto" />
          <div>
            <h3 className="top-court">{ property?.propertyName}</h3>
            <p className="paragraph-one">{ property?.address}</p>
            <p className="paragraph-two">{ property?.propType}</p>
            <p className="paragraph-three">Property Sub-Type :{ property?.strPropType}</p>
          </div>
        </section>
        <section className="card-detail-two">
          <div className="img-text-container">
            <div>
              <img src="https://res.cloudinary.com/rashot/image/upload/v1642007563/unsplash_MP0bgaS_d1c_bfy5ak.png" alt="" width="100%" height="auto" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/rashot/image/upload/v1642007553/unsplash_L7EwHkq1B2s_ha45pr.png" className="second-img" alt="" width="100%" height="auto" />
            </div>
            <p onClick={ () => alert( "Feature coming soon" ) } className="view-all">View all images</p>
          </div>
          <h3 className="amenities">Amenities</h3>
        </section>
      </div>
    </div>
  )
}
const MainDetailPageData = () => {
  return (
    <div className="page-data-container">
      <div className="transac-container">
        <div className="see-more-flex see-more-one">
          <h3>
            Transaction Details
          </h3>
          <div className="see-more-transac-container" onClick={ () => alert( "Feature coming soon" ) }>
            <span className="see-more-transac">See more</span>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
        <div className="person-list-data">
          <p className="rent-total">Total Rentals - 20</p>
          <p className="price-amout">NGN 500, 000,000.00</p>
        </div>
        <div className="person-list-data">
          <p className="rent-total">Total Rentals - 20</p>
          <p className="price-amout">NGN 500, 000,000.00</p>
        </div>
        <div className="person-list-data last">
          <p className="rent-total">Total Rentals - 20</p>
          <p className="price-amout">NGN 500, 000,000.00</p>
        </div>
      </div>
      <div className="circle-data-graph">
        <div className="see-more-flex see-more-two">
          <h3>
            Unit Details
          </h3>
          <div className="see-more-transac-container" onClick={ () => alert( "Feature coming soon" ) }>
            <span className="see-more-transac">See more</span>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  )
}