import {useState, useEffect} from "react"
import Swal from "sweetalert2"
import { useHistory} from "react-router-dom"
import {common_axios} from "../../../helper/AixosConfig/Api"
import { useDispatch, useSelector } from "react-redux"
import {SET_CURRENT_USER} from "../../../store/actions/types"



function useForm(initialValues, validateLogin) {
  const [userData, setUserData] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState( false )
  const currentUser = useSelector( state => state.auth.isAuthenticated )
  const dispatch = useDispatch()
  const history = useHistory()
  const handleSubmit = async event => {
   
    event.preventDefault()
    const validationErrors = validateLogin(userData)
    const noErrors = Object.keys(validationErrors).length === 0
    setErrors(validationErrors)
    if (noErrors) {
      setLoading(true)
      try {
        const response = await common_axios.post( "/api/auth/signin", {
          username: userData.username.trim(),
          password: userData.password.trim(),
        })
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login is successful",
          showConfirmButton: false,
          timer: 1500,
        })
       
        const token = response.data?.data?.token
        localStorage.setItem( "token", token )
        
        dispatch({
          type: SET_CURRENT_USER,
          payload: {
            isAuthenticated: true,
            user: response.data?.data?.user,
          },
        })
      } catch (err) {
        setLoading(false)
        throw new Error(err.message)
      }
    }
  }
  useEffect( () => {
    if ( currentUser ) {
      history.push( "/home" )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser])

  const handleChange = e => {
    e.persist()
    const {name, value} = e.target
    setUserData({...userData, [name]: value})
  }
  return {
    handleSubmit,
    handleChange,
    userData,
    errors,
    loading,
  }
}

export default useForm
