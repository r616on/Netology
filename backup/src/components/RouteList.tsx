import { Route } from "react-router";
import * as React from "react";

import _List from "./templates/_/_"
import Landing from "./templates/Landing/Landing";
import Index3 from "./templates/Index3/Index3";
import Support from "./templates/Support/Support";
import Top10 from "./templates/Top10/Top10";
import Reviews from "./templates/Reviews/Reviews";
import Garantuee from "./templates/Garantuee/Garantuee";

const RouteList = () => (
  <React.Fragment>
    <Route exact path="/landing">
      <Landing />
    </Route>
    <Route exact path="/index3">
      <Index3 />
    </Route>
    <Route exact path="/support">
      <Support />
    </Route>
    <Route exact path="/top10">
      <Top10 />
    </Route>
    <Route exact path="/reviews">
      <Reviews />
    </Route>
    <Route exact path="/garantuee">
      <Garantuee />
    </Route>
    <Route exact path="/">
      <_List />
    </Route>
  </React.Fragment>
);

export default RouteList;
