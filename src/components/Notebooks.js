import React from 'react';
import Notebook from './Notebook'

const Notebooks = (props) => {
    // debugger
    console.log(props.notebooks)
    return (
        <div>
            Notebooks
            {props.notebooks.map(notebook => 
                <Notebook notebook={notebook}/>)}
        </div>
    )
}

export default Notebooks