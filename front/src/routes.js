import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/chat/:username" component={Chat} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
