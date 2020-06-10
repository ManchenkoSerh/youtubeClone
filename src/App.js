import React from 'react';
import 'semantic-ui-react'
import { Grid } from 'semantic-ui-react';
import HeaderYT from './components/header/Header';
import Main from './pages/mainPage/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <div >
      <Grid padded >
        <HeaderYT/>
        <Main/>
      </Grid>
    </div>
    </BrowserRouter>
  );
}

export default App;
