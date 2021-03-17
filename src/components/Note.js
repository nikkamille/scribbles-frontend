import React from 'react';

function Note(props) {
    // debugger

    let note = props.note

    return(
        <div>
            {note && note.date}
            <h3>{note.title}</h3>
            <p>{note.content}</p>

        </div>
    )
}

export default Note