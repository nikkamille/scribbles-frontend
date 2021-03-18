import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav>
            <Link to="/notebooks/new">New Notebook</Link>
            Notes 
            {/* Notes should go to all notes /notes */}
            <Link to="/notebooks">Notebooks</Link>
        </nav>
    )
}

export default Navbar 