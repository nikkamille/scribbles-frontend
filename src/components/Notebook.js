import React from 'react';

function Notebook(props) {
    console.log(props)
    
    let notebook = props.notebook
    
    return(
        <>
            {notebook ? props.notebook.title : null}
        </>
    )
}

export default Notebook