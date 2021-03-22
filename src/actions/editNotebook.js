export default function editNotebook(notebook) {
    return (dispatch) => {
        // debugger
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({notebook})
        }
        
        fetch(`http://localhost:3000/notebooks/${notebook.id}`, options)
        .then(response => response.json())
        .then(notebook => {
            dispatch({type: 'EDIT_NOTEBOOK', payload: notebook})
        })
        
    }
}