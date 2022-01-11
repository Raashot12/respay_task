import { useState } from 'react';
import Swal from "sweetalert2"
import { useHistory } from "react-router-dom"
import Api from "../../../helper/AixosConfig/Api"
import { useSelector, useDispatch } from "react-redux"
import { SET_CURRENT_USER } from '../../../store/actions/types';

function useForm( initialValues, validateLogin ) {
  const [userData, setUserData] = useState( initialValues );
  const [errors, setErrors] = useState( {} );
  const [loading, setLoading] = useState( false );
  const history = useHistory();
   const dispatch = useDispatch()

  const handleSubmit = async ( event ) => {
    event.preventDefault();
    const validationErrors = validateLogin( userData );
    const noErrors = Object.keys( validationErrors ).length === 0;
    setErrors( validationErrors );
    if ( noErrors ) {
      setLoading( true )
      try {
        const response  = await Api.post( "/api/auth/signin", {
          username: userData.username.trim(),
          password: userData.password.trim(),
        } );
        Swal.fire( {
          position: "top-end",
          icon: "success",
          title: "Login is successful",
          showConfirmButton: false,
          timer: 1500,
        } );
        history.push( "/home" );
        console.log(response.data?.data?.user)
        // console.log(user)
        dispatch( {
          type: SET_CURRENT_USER,
          payload: {
            isAuthenticated: true,
            user:response.data?.data?.user
          }
        } );
      } catch ( err ) {
        setLoading( false );
        throw new Error( err.message );
      }
    }

   
  };

  const handleChange = ( e ) => {
    e.persist();
    const { name, value } = e.target;
    setUserData( { ...userData, [name]: value } );
  };
  return {
    handleSubmit,
    handleChange,
    userData,
    errors,
    loading
  };
}

export default useForm;