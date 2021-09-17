import { BUY_CAKE, SELL_CAKE } from "./constants";
import { LOADING } from "./constants";
const initialState = {
  noOfCakes: 10,
  isLoading: false,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payload,
        isLoading: false,
      };

    case SELL_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - action.payload,
        isLoading: false,
      };

    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default cakeReducer;
