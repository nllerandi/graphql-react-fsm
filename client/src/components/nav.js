import React from 'react';

import './nav.scss'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">

            <a className="navbar-brand" href="#">Fullstack Musician</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                className="navbar-toggler-icon"></span></button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">


                <form className="form-inline active-cyan-4">
                    <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                           aria-label="Search"/>
                </form>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Signup</a>
                    </li>


                </ul>
            </div>

        </nav>
    );
};

export default Nav