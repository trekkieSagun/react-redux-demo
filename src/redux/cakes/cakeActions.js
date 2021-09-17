import { BUY_CAKE, SELL_CAKE } from "./constants";
import { LOADING } from "./constants";

export const buyCakeAsync = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
    isLoading: false,
  };
};
export const sellCake = (number = 1) => {
  return {
    type: SELL_CAKE,
    payload: number,
    isLoading: false,
  };
};

export const loading = () => {
  return {
    type: LOADING,
  };
};

export const buyCake = () => {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(buyCakeAsync());
    }, 6000);
  };
};
