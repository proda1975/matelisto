import logo from "../../assets/mate.svg";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} />
          <span>Mate Argento</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
