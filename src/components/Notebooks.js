import React from 'react';
import { Link } from 'react-router-dom';
import NotesContainer from '../containers/NotesContainer'


const Notebooks = (props) => {
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

            <div>
                <NotesContainer/>
            </div>
        </div>
    )
}

export default Notebooks

// Add a default value for title - if notebook title is empty, it should show up as "Untitled Notebook"