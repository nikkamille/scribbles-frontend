export default function addNotebook(notebook) {
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
            dispatch({type: 'ADD_NOTEBOOK', payload: notebook})
        })
        
    }
}