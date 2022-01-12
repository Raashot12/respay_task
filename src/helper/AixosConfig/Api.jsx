import axios from "axios";

export const common_axios = axios.create( {
 baseURL: process.env.REACT_APP_BASE_URL,
} );

common_axios.interceptors.request.use( function ( config ) {
  const token = localStorage.getItem( 'token' );
  config.headers.Authorization = token ? `Bearer ${ token }` : '';
  return config;
} );



// const setAuthToken = async token => {
//   if ( token ) {
//     //Apply to every request  
//     return common_axios.defaults.headers.common['Authorization'] = token;
//   } else {
//     //Delete the auth header
//     return delete common_axios.defaults.headers.common['Authorization'];
//   }
// };

// export default setAuthToken;
