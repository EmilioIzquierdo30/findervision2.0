// src/components/Login.js
import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ingresa con:", { email, password });
    // lógica de autenticación
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Sign in</h1>
        <button className="login-google">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" />
          Continue with Google
        </button>
        <p className="or-text">or</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <a href="/" className="forgot-password">Olvistaste tu contraseña?</a>
          <button type="submit" className="login-button">Registrate!</button>
        </form>
        <p className="signup-text">
          Don’t have an account? <a href="/signup">Registrate!</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
