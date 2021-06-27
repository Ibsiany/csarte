import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Create } from "../pages/Create";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login-5319722635" exact component={Login} />
          <Route path="/create-8789654" exact component={Create} />
        </Switch>
    </BrowserRouter>
  );
}
