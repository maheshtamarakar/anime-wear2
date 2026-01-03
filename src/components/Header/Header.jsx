import { useContext } from "react";
import authContext from "../../contexts/auth/authContext";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const authData = useContext(authContext);
  console.log("authData", authData);

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <div className="logo">
            <Link to="/home">
              Anime<span>Wear</span>
            </Link>
          </div>

          <nav className="nav-menu">
            <Link to="/home">Home</Link>
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="header-actions">
            <Link className="icon" to="/login">Login</Link>
            <Link className="icon" to="/cart">Cart</Link>
          </div>
        </div>
      </header>
    </>
  );
}
