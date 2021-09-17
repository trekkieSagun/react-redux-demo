import React from "react";
import { connect } from "react-redux";

import { buyCake, sellCake } from "../redux/cakes/cakeActions";
import cake from "./cake.png";
import cakemake from "./cakemake.gif";

function CakeContainer(props) {
  return (
    <div className="container item-container">
      {props.isLoading === true ? (
        <div>
          <img src={cakemake} alt="No preview" />
          <p>Cake making is in progress</p>
        </div>
      ) : (
        <img src={cake} alt="No preview" />
      )}
      <h2>No of Cakes : {props.noOfCakes}</h2>
      <button onClick={props.buyCake}>Make Cake</button>
      <br />
      <button onClick={props.sellCake}>Sell Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
    isLoading: state.cake.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    sellCake: () => dispatch(sellCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
