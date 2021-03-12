import React from 'react';

function Notebook(props) {
    console.log(props)
    
    let notebook = props.notebook
    
    return(
        <li>
            {notebook ? props.notebook.title : null}
        </li>
    )
}

export default Notebook