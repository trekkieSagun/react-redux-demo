import { FETCH_FAILURE, FETCH_SUCCESS, FETCH_USER_REQUEST } from "./constants";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
