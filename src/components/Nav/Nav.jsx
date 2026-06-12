import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../contexts/CartContext";
// import styles from "./Nav.module.css";

export const Nav = () => {
  const { getTotalItems } = useCart();

  return (
    <nav>
      {/* <ul className={styles["nav-list"]}> */}
      <ul className="nav-list">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/carrito"}>Carrito ({getTotalItems()})</Link>
        </li>
        <li>
          <Link to={"/abm"}>ABM</Link>
        </li>
      </ul>
    </nav>
  );
};
