import React from "react";
import { Grid } from "semantic-ui-react";
import BodyLeft from "../sidebar/BodyLeft";
import "./Main.scss";
import Routers from "../helpers/routes";

function Main() {
  return (
    <Grid.Row className="sidebar-white">
      <Grid.Column width={2}>
        <BodyLeft/>
      </Grid.Column>
      <Grid.Column width={14}>
        <Routers />
      </Grid.Column>
    </Grid.Row>
  );
}
export default Main;