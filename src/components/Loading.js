import React from "react";
import Loader from "react-loader-spinner";
import "../App.css";

const Loading = () => {
  return (
    <div className="container-loader">
      <Loader type="Circles" color="#44b0ea" height={100} width={100} />
    </div>
  );
};
export default Loading;
