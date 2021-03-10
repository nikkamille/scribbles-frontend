import React from 'react';

const Notebooks = (props) => {
    // debugger
    console.log(props.notebooks)
    return (
        <div>
            Notebooks
            {props.notebooks.map(notebook => <li key={notebook.id}>{notebook.title}</li>)}
        </div>
    )
}

export default Notebooks