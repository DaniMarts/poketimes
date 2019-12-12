import React from 'react';
import {Link, NavLink, withRouter} from "react-router-dom";

function Navbar(props) {
    // setTimeout(() => props.history.push("/about"), 5000);
    // console.log(props)
    
    return(
        <nav className="nav-wrapper light-green darken-3">
            <div className="container">
                <Link to="" className="brand-logo">Poke's times</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>

                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);