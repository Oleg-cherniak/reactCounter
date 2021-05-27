import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import { ROUTES } from "./routeNames";
import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import CounterPageContainers from "../pages/CounterPage/containers/CounterPageContainers";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
      <Route
        exact
        path={ROUTES.COUNTER_PAGE}
        component={CounterPageContainers}
      />
    </Switch>
  );
};

export default Routes;
