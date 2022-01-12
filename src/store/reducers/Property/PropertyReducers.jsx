import {
  PROPERTY_DETAILS_FAIL,
  PROPERTY_DETAILS_SUCCESS,
  PROPERTY_DETAILS_REQUEST,
  PROPERTY_LIST_FAIL,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_REQUEST,
} from "../../actions/types"

function propertyListReducer(state = {products: []}, action) {
  switch (action.type) {
    case PROPERTY_LIST_REQUEST:
      return {loading: true, products: action.payload}
    case PROPERTY_LIST_SUCCESS:
      return {loading: false, products: action.payload}
    case PROPERTY_LIST_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}

function propertyDetailsReducer(state = {property: {reviews: []}}, action) {
  switch (action.type) {
    case PROPERTY_DETAILS_REQUEST:
      return {loading: true}
    case PROPERTY_DETAILS_SUCCESS:
      return {loading: false, property: action.payload}
    case PROPERTY_DETAILS_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}

export { propertyListReducer, propertyDetailsReducer}
