import React from 'react';
import { Link,NavLink} from 'react-router-dom';

const navbar=() => (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <Link className="navbar-brand" to='/'>Blog App</Link>
            <button
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
            
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to='/'>Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to='/blog'>Blog</NavLink>
                    </li>
                </ul>
            </div>
        
    </nav>
);

export default navbar