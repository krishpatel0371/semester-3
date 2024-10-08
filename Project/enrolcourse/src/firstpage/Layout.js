import { Link, Outlet, NavLink } from "react-router-dom";
import Logo from './logo.png';
import { useState } from 'react';

function Layout() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

    const handleLogIn = () => {
        setIsLoggedIn(true);
    };

    const handleLogOut = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" style={{ zIndex: '1030' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" aria-label="Home">
                        <img src={Logo} alt="Company Logo" style={{ height: '39px', marginTop: '-9px' }} />
                    </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" style={{color:'black'}} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: 'black' }}>
                            {['/', '/course'].map((path, index) => (
                                <li className="nav-item" key={index}>
                                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={path} end>
                                        {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
                                    </NavLink>
                                </li>
                            ))}
                            <li className="nav-item">
                                <NavLink to="/About" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Contact" className="nav-link">Contact Us</NavLink>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {!isLoggedIn ? (
                                <>
                                    <li>
                                        <Link to="/Sign in" className="btn btn-primary" style={{ marginRight: "3px" }} onClick={handleLogIn}>
                                            <span className="glyphicon glyphicon-user"></span> Sign in
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Log in" className="btn btn-primary" onClick={handleLogIn}>
                                            <span className="glyphicon glyphicon-log-in"></span> Log in
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <button className="btn btn-danger" onClick={handleLogOut}>
                                        Log out
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <div style={{ marginTop: "10px" }}>
                <Outlet />
            </div>

            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                {/* Footer content here */}
                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Coursera.com</a>
                </div>
            </footer>
        </>
    );
}

export default Layout;
