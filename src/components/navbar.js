import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './navbar.css'

class Header extends React.Component{
    render () {
        return (
        <nav className="navbar navbar-expand-lg theme-yellow font-weight-bold theme-brown-font">
        <div className="navbar-brand">Finance Buddy</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to='/' className="nav-item nav-link">Home</Link>
                <Link to='/user/:id' className="nav-item nav-link">Profile</Link>
                <Link to='/user/:id/statements' className="nav-item nav-link">Statements</Link>
                <Link to='/user/:id/expenses' className="nav-item nav-link">Expenses</Link>
            </div>
        </div>
    </nav>
)}
}

export default Header;