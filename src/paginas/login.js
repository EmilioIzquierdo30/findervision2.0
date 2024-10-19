import React, { useState } from 'react';
import styles from './login.module.css'; // Cambiar a import modular

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ingresa con:", { email, password });
    // lógica de autenticación
  };

  return (
    <div className={styles['login-container']}>
      <div className={styles['login-box']}>
        <h1 className={styles['login-title']}>Bienvenido de vuelta!</h1>
        <button className={styles['login-google']}>
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" />
          Continue with Google
        </button>
        <p className={styles['or-text']}>or</p>
        <form onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <a href="/" className={styles['forgot-password']}>Olvistaste tu contraseña?</a>
          <button type="submit" className={styles['login-button']}>Registrate!</button>
        </form>
        <p className={styles['signup-text']}>
          Don’t have an account? <a href="/signup">Registrate!</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
