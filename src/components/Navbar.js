import React from 'react';
import "../styles/Navbar.css";
import logo from '../images/logo.svg';

class Navbar extends React.Component{
    render() {
        return (
        <div className="Navbar">
        <div className="container-fluid"></div>
            <a className="Nav__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="logo"/>
            <span className="font-wight-light">Platzi</span>
            <span className="font-wight-bold">Conf</span>
            </a>
        </div>
        );
    }
}

export default Navbar;