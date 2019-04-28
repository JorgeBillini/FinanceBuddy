import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import FinanceBuddyLogo from '../assets/financebuddylogo.png'

class Header extends React.Component{
    render () {
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="navbar-brand"><img width="75px" height="50px" src ={FinanceBuddyLogo}/></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to='/' className="nav-item nav-link">Home</Link>
                <Link to='/user/:id' className="nav-item nav-link">Profile</Link>
            </div>
        </div>
    </nav>
)}
}

export default Header;