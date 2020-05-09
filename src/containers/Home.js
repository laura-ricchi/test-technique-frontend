import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "../App.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
      <Typography variant="h2">Nos profils</Typography>

      {isLoading ? (
        <p>Page is coming...</p>
      ) : (
        <Grid class="container-home">
          {data.results.map((user, index) => {
            return (
              <Grid class="all-cards">
                <Card class="card" key={index}>
                  <CardMedia
                    component="img"
                    alt="people"
                    class="picture-user"
                    src={
                      user.picture.large.path +
                      "." +
                      user.picture.large.extension
                    }
                  />
                  <CardContent class="card-info-user">
                    <div>
                      <div class="name-profile">
                        {user.name.first} {user.name.last}
                      </div>
                      <div>{user.location.country}</div>
                      <div>{user.dob.age} ans</div>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      aria-label="small outlined button"
                      color="primary"
                    >
                      Voir son profil
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};
export default Home;
