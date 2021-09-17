import React from "react";
import { connect } from "react-redux";

import { buyIceCream } from "../redux/iceCream/iceCreamActions";
import iceCream from "./icecream.png";

function IceCreamContainer(props) {
  return (
    <div className="container item-container">
      <img src={iceCream} alt="No preview" />
      <h2>No of IceCreams : {props.noOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfIceCream: state.iceCream.noOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
