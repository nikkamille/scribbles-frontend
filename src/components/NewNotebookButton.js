import React from 'react';
import { Link } from 'react-router-dom';

function NewNotebookButton() {
    return (
        <div>
            <Link to="/notebooks/new">
                <button>New Notebook</button>
            </Link>
        </div>
    )
    
}

export default NewNotebookButton