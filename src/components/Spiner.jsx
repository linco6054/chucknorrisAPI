import React from "react";
import spinner from "../assets/images/spin.svg";
function Spiner() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <img className="hover:shadow-md" src={spinner} alt="spinner" />
    </div>
  );
}

export default Spiner;
