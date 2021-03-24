import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav>
            <Link to="/notebooks/new">New Notebook</Link>
            <Link to="/notebooks">Notebooks</Link>
            <Link to="/notes">Notes</Link>
        </nav>
    )
}

export default Navbar 