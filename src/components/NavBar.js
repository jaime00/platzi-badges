import React, { Component } from "react";
import logo from "../images/logo.svg";
import "./styles/NavBar.css";

export default class NavBar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a href="/" className="Navbar__brand">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div>
            </div>
        );
    }
}
