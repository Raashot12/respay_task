import { useState } from 'react';
import Swal from "sweetalert2"
import { useHistory } from "react-router-dom"
import Api from "../../../helper/AixosConfig/Api"

function useForm( initialValues, validateLogin ) {
  const [userData, setUserData] = useState( initialValues );
  const [errors, setErrors] = useState( {} );
  const [loading, setLoading] = useState( false );
  const history = useHistory();


  const handleSubmit = async ( event ) => {
    event.preventDefault();
    const validationErrors = validateLogin( userData );
    const noErrors = Object.keys( validationErrors ).length === 0;
    setErrors( validationErrors );
    if ( noErrors ) {
      setLoading( true )
      try {
        const { data } = await Api.post( "/api/auth/signin", {
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
        console.log(data)
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