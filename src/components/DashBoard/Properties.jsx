/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useMemo} from "react"
import Layout from "../Layout/Layout"
import PropertyComponentCard from "./PropertyCard"
import {useDispatch, useSelector} from "react-redux"
import {listProperty} from "../../store/actions/propertyActions"
import Spinner from "react-spinkit"
import Pagination from "../../Utilities/Pagination/Pagination"

let PageSize = 6
const Properties = () => {
  const propertyList = useSelector(state => state.propertyList)
  const dispatch = useDispatch()
  const {products, loading, error} = propertyList || {}
  const {data} = products || []

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return data?.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, data])
  useEffect(() => {
    dispatch(listProperty())
  }, [dispatch])

  const rendederedComponent = loading ? (
    <div style={{margin: "4rem auto", paddingLeft: "50%", paddingRight: "50%"}}>
      <Spinner name="circle" style={{height: 60}} color="#038618" />
    </div>
  ) : error ? (
    <>
      <h1 className="error-message">{error}! Please check your connection</h1>
    </>
  ) : (
    <div className="grid-wrapper">
      {currentTableData?.map(cardData => {
        return (
          <PropertyComponentCard cardDetails={cardData} key={cardData.id} />
        )
      })}
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
      {rendederedComponent}
      {!loading && (
        <div className="pagination-grand-container">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data?.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
      )}
    </Layout>
  )
}

export default Properties
