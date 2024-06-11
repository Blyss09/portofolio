import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='header'>
            <ul>
                <li className='logo'>Théo.</li>
                <nav className='navbar'>
                    <NavLink to={"/home"}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>About Me</li>
                    </NavLink>
                    <NavLink to={"/projects"}>
                        <li>Projects</li>
                    </NavLink>
                    <NavLink to={"/contact"}>
                        <li>Contact</li>
                    </NavLink>
                </nav>
            </ul>
        </div>
    );
};

export default Navigation;