import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages Imports
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Eventos } from "./pages/Eventos";

// Utils Imports
// import { useAuth } from "./hooks/useAuth";

export function Router() {
  //   const { signedIn } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Login} />
        <Route path="/events" exact component={Eventos} />
      </Switch>
    </BrowserRouter>
  );
}
