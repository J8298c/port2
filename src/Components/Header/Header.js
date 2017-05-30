import React from 'react';
import {Link} from 'react-router';
import './Header.css';

export default function Header(){
    return(
        <div className="header">
            <Link to="/" className="header-links">About</Link>
            <Link to="/projects" className="header-links">Projects</Link>
            <Link to="/skills" className="header-links">Skills</Link>
        </div>
    )
}