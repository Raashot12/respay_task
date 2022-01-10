/* eslint-disable import/no-anonymous-default-export */
import { GET_USERS, LOGOUT_USERS} from "../../actions/types/index"

const initialState = {
  isAuthenticated: false,
  user: null
};

export default function ( state = initialState, action ) {
  switch ( action.type ) {
    case GET_USERS:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };
    case LOGOUT_USERS:
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}
