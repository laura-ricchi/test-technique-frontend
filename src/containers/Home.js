import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "../App.css";

const Home = () => {
  // création des états pour l'affichage des profils
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=20"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Fetching data failed");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Tous les profils</title>
      </Helmet>
      <h1>Nos profils</h1>

      {isLoading ? (
        <p>Page is coming...</p>
      ) : (
        <div>
          {data.results.map((user, index) => {
            return (
              <div key={index}>
                <img alt="people" src={user.picture.large.path}></img>
                <p>{user.name.first}</p>
                <p>{user.name.last}</p>
                <p>{user.location.state}</p>
                <p>{user.location.country}</p>
                <p>{user.dob.age} ans</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Home;
