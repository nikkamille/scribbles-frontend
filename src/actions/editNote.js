export default function editNote(note, notebookId) {
    return (dispatch) => {
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(note)
        }
        
        fetch(`http://localhost:3000/notebooks/${notebookId}/notes/${note.id}`, options)
        .then(response => response.json())
        .then(note => {
            dispatch({type: 'EDIT_NOTE', payload: note})
        })
        
    }
}