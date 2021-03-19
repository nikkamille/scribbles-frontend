import React from 'react';
import { Link, Route } from 'react-router-dom';
import Note from './Note';

function Notes(props) {
    debugger
    return (
        <div>
            <br/>
            <ul>
                {props.notebook && props.notebook.notes.map(note => 
                    <li key={note.id}>
                        <Note note={note}/>
                        {/* {note.title} - {note.content} */}
                        {/* <Link to={`/notebooks/${note.notebook_id}/notes/${note.id}`}>{note.title}</Link> */}
                        {/* Uncomment the link part when I'm doing the routing */}
                    </li>
                )}
            </ul>
            {/* <Route exact path="/notebooks/:id/notes/:id" render={(routerProps) => <Note {...routerProps}/>}/> */}
                {/* <Note note={props.notes.map(note => note.title, note.content)}/> */}
        </div>
    )

}

export default Notes