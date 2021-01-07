import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";

const Results = () => {
  return (
    <>
      <Grid item md>
        <Card className="search-results">
          <CardContent className="card-content">
            <h1>Results for </h1>
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

export default Results;
