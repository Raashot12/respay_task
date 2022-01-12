import { common_axios } from '../../helper/AixosConfig/Api';

const setAuthToken = async token => {
  if ( token ) {
    //Apply to every request  
    common_axios.defaults.headers.common['Authorization'] = token
  } else {
    //Delete the auth header
    delete common_axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;


