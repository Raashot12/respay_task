import React, { useEffect } from "react"
import { PropertyData } from "../../views/pages/Data/PropertyData"
import Layout from "../Layout/Layout"
import PropertyComponentCard from "./PropertyCard"
import { useDispatch, useSelector } from "react-redux"
import { listProperty } from "../../store/actions/propertyActions"
import Spinner from "react-spinkit"
import Swal from "sweetalert2"
const Properties = () => {
  const propertyList = useSelector( state => state.propertyList )
  const dispatch = useDispatch()
  console.log( propertyList )
  const { property, loading, error } = propertyList || {}
  console.log( loading )

  useEffect( () => {
    dispatch( listProperty() )
  }, [dispatch] )

  const rendederedComponent = loading ? (
    <>
    <Spinner name="circle"  color="#038618" />
    </>
  ) : error ? (
    <>
     <h1 className="error-message">{error }! Please check your connection</h1>
      </>
  ) : (
    <div className="grid-wrapper">
      { PropertyData.map( ( cardData, index ) => {
        return <PropertyComponentCard { ...cardData } key={ index } />
      } ) }
    </div>
  )
  return (
    <Layout>
      <div className="btn-container-property">
        <h2>Properties</h2>
        <div className="btn">
          <i className="fas fa-plus"></i> Add New Property
        </div>
      </div>
      { rendederedComponent }
    </Layout>
  )
}

export default Properties
