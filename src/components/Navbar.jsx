import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-between p-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          To-Do App
        </Link>
        <div className="d-flex align-items-center">
          <ThemeToggle />
          {isAuthenticated ? (
            <>
              <Link className="btn btn-outline-light me-2" to="/dashboard">
                Dashboard
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            </>
          ) : (
            <Link className="btn btn-outline-light" to="/">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;