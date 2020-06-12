import React from "react";
import "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import Header from "./components/header/Header";
import Main from "./components/body/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Grid padded>
          <Header />
          <Main />
        </Grid>
      </div>
    </BrowserRouter>
  );
}

export default App;
