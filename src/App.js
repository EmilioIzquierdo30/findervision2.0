import React from "react";
import "./App.css"; // Importa tu archivo CSS
import logoR from './assets/img/logoR.png'; // Importa la imagen del logo
import { GoogleLogin } from '@react-oauth/google';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            formErrors: {},
            isSubmit: false,
            successMessage: ""
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ formErrors: errors, isSubmit: true });

        if (Object.keys(errors).length === 0) {
            console.log("Detalles ingresados:", {
                username: this.state.username,
                password: this.state.password
            });
            this.setState({ successMessage: "Registrado exitosamente" });
        }
    };

    validate = () => {
        const errors = {};
        if (!this.state.username) {
            errors.username = "Se requiere el usuario!";
        }
        if (!this.state.password) {
            errors.password = "Se requiere contraseña";
        } else if (this.state.password.length < 4) {
            errors.password = "La contraseña debe tener más de 4 caracteres";
        } else if (this.state.password.length > 10) {
            errors.password = "La contraseña no puede exceder más de 10 caracteres";
        }
        return errors;
    };

    render() {
        return (
            <>
                <div className="bgImg"></div>
                <div className="container">
                    <img src={logoR} alt="Logo" className="logo" />
                    {this.state.successMessage && (
                        <div className="ui message success">
                            {this.state.successMessage}
                        </div>
                    )}

                    <form onSubmit={this.handleSubmit}>
                        <h1>Iniciar Sesion</h1>
                        <div className="ui divider"></div>
                        <div className="ui form">
                            <div className="field">
                                <label>Usuario</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Ingrese su usuario"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                                {this.state.formErrors.username && <p className="error">{this.state.formErrors.username}</p>}
                            </div>
                            <div className="field">
                                <label>Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                {this.state.formErrors.password && <p className="error">{this.state.formErrors.password}</p>}
                            </div>
                            <button type="submit" className="fluid ui button blue">Ingresar</button>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    console.log("Google Login Success:", credentialResponse);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default App;
