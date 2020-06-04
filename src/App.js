import React from 'react';
import 'semantic-ui-react'
import { Grid } from 'semantic-ui-react';
import HeaderYT from './components/header/HeaderYT';
import BodyYT from './components/body/BodyYT';
import { BrowserRouter } from 'react-router-dom';
import InputSearch from "./containers/input-search/InputSearch";
function App() {

  return (
    <BrowserRouter>
    <div >
      <Grid padded >
        <HeaderYT/>
        <BodyYT/>
      </Grid>
    </div>
    </BrowserRouter>
  );
}

export default App;
