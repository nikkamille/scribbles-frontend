import React from 'react';

function Note(props) {
    // debugger

    let note = props.note

    const handleDelete = (event) => {

    }

    return(
        <div>
            {note && note.date}
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={handleDelete}>Delete</button>

        </div>
    )
}

export default Note