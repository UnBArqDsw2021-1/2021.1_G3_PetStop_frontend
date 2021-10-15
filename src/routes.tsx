import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages Imports
import { Home } from "./pages/Home";
import { Adoptions } from "./pages/Adoptions";

// Utils Imports
// import { useAuth } from "./hooks/useAuth";

export function Router() {
  //   const { signedIn } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/adoptions" exact component={Adoptions} />
      </Switch>
    </BrowserRouter>
  );
}
