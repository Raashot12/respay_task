/* eslint-disable import/no-anonymous-default-export */
import { SET_CURRENT_USER} from "../../actions/types/index"

const initialState = {
  user: null
};

export default function ( state = initialState, action ) {
  switch ( action.type ) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
}
