import React from "react";
import { Link } from "react-router-dom";
import { useStore, actions } from "../store";
import { useState } from "react";

const Navbar = () => {
  const [state, dispatch] = useStore();
  const [mode, setMode] = useState(state.mode);

  const handleOnClick = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    dispatch(actions.setMode(newMode));
  };
  return (
    <nav className="navbar bg-success">
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
      <ul>
        <li>
          <button onClick={handleOnClick} >{mode}</button>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
