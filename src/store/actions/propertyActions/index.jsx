import axios from "axios";
import { common_axios } from "../../../helper/AixosConfig/Api";
import { PROPERTY_LIST_SUCCESS, PROPERTY_LIST_FAIL,PROPERTY_LIST_REQUEST, PROPERTY_DETAILS_FAIL, PROPERTY_DETAILS_REQUEST, PROPERTY_DETAILS_SUCCESS } from "../types";
const endpoint = process.env.REACT_APP_BASE_URL;
const listProperty = () => async ( dispatch ) => {

  try {
    dispatch( { type: PROPERTY_LIST_REQUEST, payload: [] } );
    const { data } = await common_axios.get("/api/properties" );

    dispatch( { type: PROPERTY_LIST_SUCCESS, payload: data } );
  } catch ( error ) {
    dispatch( { type: PROPERTY_LIST_FAIL, payload: error?.message } );
  }
};

const detailsProperty = ( productId ) => async ( dispatch ) => {
  try {
    dispatch( { type: PROPERTY_DETAILS_REQUEST, payload: productId } );
    const { data } = await common_axios.get( "https://fakestoreapi.com/products/" + productId );
    dispatch( { type: PROPERTY_DETAILS_SUCCESS, payload: data } );
  } catch ( error ) {
    dispatch( { type: PROPERTY_DETAILS_FAIL, payload: error.message } );
  }
};
export {
  listProperty,
  detailsProperty,

};
