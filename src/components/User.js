import React from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/User.css";
import { FaUserCircle } from "react-icons/fa";

const User = () => {
  const history = useHistory();
  return (
    <div className="container-user">
      <FaUserCircle
        className="icon-user"
        onClick={() => {
          history.push("/login");
        }}
      />
    </div>
  );
};
export default User;
