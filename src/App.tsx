import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages Imports
// import { Home } from "./pages/Home";

// Components Imports
import { Header } from "./components/Header";

// Styles Imports
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
