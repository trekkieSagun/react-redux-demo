import React from "react";
import { connect } from "react-redux";
import cake from "./cake.png";
import iceCream from "./icecream.png";

function ItemContainer(props) {
  return (
    <div className="container itemContainer">
      {props.cake ? (
        <div>
          <img src={cake} alt="no preview" />
          <h2>No of Cakes -{props.item} </h2>
        </div>
      ) : (
        <div>
          <img src={iceCream} alt="no preview" />
          <h2>No of IceCream - {props.item}</h2>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.noOfCakes
    : state.iceCream.noOfIceCream;

  return {
    item: itemState,
  };
};

export default connect(mapStateToProps)(ItemContainer);
