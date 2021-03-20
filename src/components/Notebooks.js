import React from 'react';
import { Link } from 'react-router-dom';



function Notebooks(props) {
    // debugger
    return (
        <div>
            <ul>
                Notebooks
                {props.notebooks.map(notebook => 
                    <li key={notebook.id}>
                        {/* <Notebook notebook={notebook}/> */}
                        <Link to={`/notebooks/${notebook.id}`}>{notebook.title}</Link>
                    </li> )}
            </ul>
        </div>
    )
}

export default Notebooks

// Add a default value for title - if notebook title is empty, it should show up as "Untitled Notebook"