export default function addNote(note, notebookId) {
    return (dispatch) => {
        // debugger
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(note)
        }
        
        fetch(`http://localhost:3000/notebooks/${notebookId}/notes`, options)
        .then(response => response.json())
        .then(note => {
            dispatch({type: 'ADD_NOTE', payload: note})
        })
        
    }
}