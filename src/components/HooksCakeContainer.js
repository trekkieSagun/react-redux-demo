import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

function HooksCakeContainer() {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);

  const handleClick = () => {
    buyCake();
  };

  return (
    <div className="container">
      <h2>No of cakes:{noOfCakes}</h2>
      <button onClick={handleClick}>Make Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
