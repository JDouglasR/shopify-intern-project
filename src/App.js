import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  TextField,
} from "@material-ui/core";
import "./App.css";
import Results from "./components/Results";
import Nominations from "./components/Nominations";

function App() {
  return (
    <div className="App">
      <Container>
        <h1>The Shoppies</h1>
        <Card className="card">
          <CardContent className="card-content">
            <TextField
              id="outlined-search"
              label="Search Movie Title"
              type="search"
              variant="outlined"
            />
          </CardContent>
        </Card>
      </Container>
      <Container>
        <Grid container>
          <Results />
          <Nominations />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
