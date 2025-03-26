import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      dispatch(register({ email, password }));
      alert("Registration successful! Now login.");
      setIsRegistering(false);
    } else {
      const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
      if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
        dispatch(login({ email }));
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    }
  };

  return (
    <div className="card p-3 text-light bg-dark">
      <h4>{isRegistering ? "Register" : "Login"}</h4>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control my-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control my-2"
          required
        />
        <button className="btn btn-primary w-100" type="submit">
          {isRegistering ? "Register" : "Login"}
        </button>
      </form>
      <button
        className="btn btn-secondary mt-2 w-100"
        onClick={() => setIsRegistering(!isRegistering)}
      >
        {isRegistering ? "Already have an account? Login" : "Need an account? Register"}
      </button>
    </div>
  );
}

export default LoginForm;