import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages Imports
import { Home } from "./pages/Home";

// Utils Imports
// import { useAuth } from "./hooks/useAuth";

export function Router() {
  //   const { signedIn } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
