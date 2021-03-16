import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, Card, CardActions, Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Loading from "../components/Loading";
import "../assets/css/Common.css";
import "../assets/css/Home.css";

// création de la page Home
const Home = ({ email, token, testKey }) => {
  // création des états pour l'affichage des profils
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const history = useHistory();

  // création d'un useEffect pour le chargement des données et l'affichage de la route protégée ("/home")
  useEffect(() => {
    const fetchData = async () => {
      try {
        // route protégée pour l'authorisation de connexion
        const authenticated = await axios.post(
          "http://localhost:3001/home",
          {
            email: email,
            key: testKey,
          },
          // on récupère en-tête Bearer + token
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        // si l'utilisateur est authentifié alors le statut est "vérifé"
        if (authenticated.data.message === "Verified") {
          // récupère les données d'une API
          const response = await axios.get(
            "https://randomuser.me/api/?results=12"
          );
          // mise à jour de la fonction setData
          setData(response.data);
          // le chargement des données a été réalisé => false
          setIsLoading(false);
        } else {
          // sinon redirection sur la page Login
          history.push("/login");
        }
        // sinon erreur (catch)
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [email, history, testKey, token]);

  return (
    <Grid>
      <Helmet>
        <title>Tous les profils</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        // sinon affichage des données de l'API
        <Grid className="container-home">
          {data.results.map((user, index) => {
            return (
              <Grid key={index}>
                <Card className="card">
                  <div className="picture-card">
                    <img
                      alt={user.name.first}
                      className="picture-user"
                      src={user.picture.large}
                    />
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
                    <Button>Voir son profil</Button>
                    <Button>Contacter</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Grid>
  );
};
export default Home;
