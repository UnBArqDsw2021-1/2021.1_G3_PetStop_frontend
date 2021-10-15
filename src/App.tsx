import React from "react";

// Components Imports
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Router } from "./routes";
import { AuthProvider } from "./hooks/useAuth";

// Styles Imports
import "./styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Router />
      <Footer />
    </AuthProvider>
  );
}

export default App;
