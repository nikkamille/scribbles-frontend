import React from 'react';
import { Link } from 'react-router-dom';
import Note from './Note';

function Notes(props) {
    // debugger
    return (
        <div>
            <br/>
            All notes go here:
            <ul>
                {props.notes && props.notes.map(note => 
                    <li key={note.id}>
                        {/* <Note note={note}/> */}
                        {note.title} - {note.content}
                        {/* <Link to={`/notebooks/${note.notebook_id}/notes/${note.id}`}>{note.title}</Link> */}
                        {/* Uncomment the link part when I'm doing the routing */}
                    </li>
                )}
            </ul>
        </div>
    )

}

export default Notes