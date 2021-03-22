export default function addNotebook(notebook) {
    // debugger
    return (dispatch) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({notebook})
        }
        
        fetch('http://localhost:3000/notebooks', options)
        .then(response => response.json())
        .then(notebook => {
            if (notebook.error) {
                alert(notebook.error)
            } else {
            dispatch({type: 'ADD_NOTEBOOK', payload: notebook})
            }
        })
        // I may remove the alert when I'm able to add a default value for notebook if title is left empty.
        
    }
}