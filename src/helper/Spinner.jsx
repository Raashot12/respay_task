import React from "react"
import "../helper/Spinner.scss"
const Spinner = () => {
  const [spinner, setSpinner] = React.useState(true)
  // It will be executed before rendering
  React.useEffect(() => {
    const id = setTimeout(() => setSpinner(false), 3000)

    return () => {
      clearTimeout(id)
    }
  }, [])
  return (
    <>
      {spinner && (
        <div className="preloader-area">
          <div className="spinner">
            <div className="inner">
              <div className="disc" />
              <div className="disc" />
              <div className="disc" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Spinner

