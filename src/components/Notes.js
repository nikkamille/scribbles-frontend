import React from 'react';
import { Link, Route } from 'react-router-dom';
import Note from './Note';

function Notes(props) {
    console.log(props.notes)
    return (
        <div>
            <br/>
            <ul>
                {props.notes && props.notes.map(note => 
                    <li key={note.id}>
                        <Link to={`/notebooks/${note.notebook_id}/notes/${note.id}`}>{note.title}</Link>
                    </li>
                )}
            </ul>
        </div>
    )

}

export default Notes