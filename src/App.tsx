import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages Imports
// import { Home } from "./pages/Home";

// Components Imports
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Styles Imports
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
