import React from 'react';

function Login() {
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form>
        <label>Usuario:</label>
        <input type="text" name="username" />
        <label>Contraseña:</label>
        <input type="password" name="password" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
