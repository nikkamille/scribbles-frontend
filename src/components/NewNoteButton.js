import React from 'react';
import { Link } from 'react-router-dom';

function NewNoteButton(props) {
    // debugger
    return (
        <div>
            <Link to={`/notebooks/${props.notebook.id}/notes/new`}>
                <button>New Note</button>
            </Link>
        </div>
    )
    
}

export default NewNoteButton