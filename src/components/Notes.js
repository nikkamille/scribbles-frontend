import React from 'react';
import Note from './Note';

function Notes(props) {
    // debugger
    return (
        <div>

            All notes go here:
            {props.notes && props.notes.map(note => 
                <li key={note.id}>{note.title}</li>
            )}
        
        </div>
    )

}

export default Notes