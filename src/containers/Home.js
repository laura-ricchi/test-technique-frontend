import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "../App.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Loading from "../components/Loading";
import { styled } from "@material-ui/core/styles";

const Home = () => {
  // création des états pour l'affichage des profils
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const ButtonProfile = styled(Button)({
    background: "linear-gradient(45deg, #4183d7 30%, #44b0ea 90%)",
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(65, 131, 215, .3)",
    color: "white",
    width: 150,
    height: 35,
    fontSize: 10,
    padding: "0 30px",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=12"
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
    <Grid>
      <Helmet>
        <title>Tous les profils</title>
      </Helmet>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="container-home">
          {data.results.map((user, index) => {
            return (
              <Grid key={index}>
                <Card className="card">
                  <div className="picture-card">
                    <img
                      alt={user.name.first}
                      className="picture-user"
                      src={user.picture.large}
                    ></img>
                    <div className="info-user">
                      <div className="name-profile">{user.name.first}</div>
                      <div className="age-user">{user.dob.age} ans</div>
                      <div className="state-user">{user.location.state}</div>
                      <div className="country-user">
                        {user.location.country}
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <CardActions className="button-profile">
                    <ButtonProfile>Voir son profil</ButtonProfile>
                    <ButtonProfile>Contacter</ButtonProfile>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </div>
      )}
    </Grid>
  );
};
export default Home;
