import axios from 'axios';

const setAuthToken = async token => {
  if ( token ) {
    //Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    //Delete the auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
