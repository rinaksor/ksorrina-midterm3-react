import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import { useStore } from "./components/store";
const App = () => {
  const [state] = useStore();
  const mode = state.mode;
  document.body.className = mode === "dark" ? "bg-dark" : "bg-light";
  return (
    <div className={`App ${mode}`}>
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
};
export default App;
