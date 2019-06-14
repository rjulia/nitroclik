import {
  SHOW_WORKS,
  SHOW_WORKS_FAILURE,
  SHOW_WORKS_SUCCESS,

} from "../Actions/types.js";

const initialState = {
  works: [],
  isLoading: false,
  errorMessage: ""
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_WORKS:
      return {
        ...state,
        isLoading: true
      }
    case SHOW_WORKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        works: action.payload
      }
    case SHOW_WORKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }

    default:
      return state;
  }
}