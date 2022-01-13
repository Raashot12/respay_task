import { common_axios } from "../../../helper/AixosConfig/Api";
import { PROPERTY_LIST_SUCCESS, PROPERTY_LIST_FAIL, PROPERTY_LIST_REQUEST, PROPERTY_DETAILS_FAIL, PROPERTY_DETAILS_REQUEST, PROPERTY_DETAILS_SUCCESS } from "../types";


const listProperty = () => async ( dispatch ) => {


  try {
    dispatch( { type: PROPERTY_LIST_REQUEST, payload: [] } );
    const { data } = await common_axios.get( "/api/properties" );
    dispatch( { type: PROPERTY_LIST_SUCCESS, payload: data } );
  } catch ( error ) {
    dispatch( { type: PROPERTY_LIST_FAIL, payload: error?.message } );
    if ( error?.message === "Request failed with status code 401" ) {
      localStorage.removeItem("token")
    }
  }
};

const detailsProperty = ( slug ) => async ( dispatch ) => {
  try {
    dispatch( { type: PROPERTY_DETAILS_REQUEST, payload: slug } );
    const { data } = await common_axios.get( `/api/propertybyid?Id=${ slug }` );
    dispatch( { type: PROPERTY_DETAILS_SUCCESS, payload: data.data[0] } );
  } catch ( error ) {
    dispatch( { type: PROPERTY_DETAILS_FAIL, payload: error.message } );
  }
};
export {
  listProperty,
  detailsProperty,

};
