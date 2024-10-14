import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Asegúrate de importar esto

const clientId = "198114410227-rfpr09bqgsn3bksl05v7o7npp86i17vq.apps.googleusercontent.com"; // Sustituye con tu ID de cliente de Google

ReactDOM.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={clientId}>
            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
