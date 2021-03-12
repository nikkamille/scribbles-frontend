import React from 'react';

function Notebook(props) {
    return(
        <li key={props.notebook.id}>
            {props.notebook.title}
        </li>
    )
}

export default Notebook