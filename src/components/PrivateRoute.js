import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import axios from "axios";

const PrivateRoute = () => {
  const [data, setData] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/home");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [data]);

  return isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" />;
};
export default PrivateRoute;
