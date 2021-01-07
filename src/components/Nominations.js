import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";

const Nominations = () => {
  return (
    <>
      <Grid item md>
        <Card className="nominations">
          <CardContent className="card-content">
            <h1>Nominations:</h1>
            <ul>
              <li>Movie 1</li>
              <li>Movie 2</li>
              <li>Movie 3</li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Nominations;
