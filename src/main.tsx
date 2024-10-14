import React from 'react' 
import ReactDOM from 'react-dom/client' 
import App from './App.tsx' 
import './index.css' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Routes/login.tsx';
import SignUp from './Routes/regsitrar.tsx';
import Dashboards from './Routes/dashboards.tsx';

const router = createBrowserRouter([
    {
        path: "/Login",
        element: <Login/>,
    },
    {
        path: "/SignUp",
        element: <SignUp/>,
    },
    {
        path: "/Dashboards",
        element: <Dashboards/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render( 
    <React.StrictMode> 
        <RouterProvider router={router}/> 
    
    </React.StrictMode>
);

