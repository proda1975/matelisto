import logo from "../../assets/Mate.svg";
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
