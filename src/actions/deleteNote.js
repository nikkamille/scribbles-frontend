export default function deleteNote(notebookId, noteId) {

    return (dispatch) => {
        return fetch(`http://localhost:3000/notebooks/${notebookId}/notes/${noteId}`, {
            method: "DELETE"
        })
        // .then(response => response.json())
        // .then(note => {
        //     dispatch({type: "DELETE_NOTE", payload: note})
        // })
        .then(response => dispatch({type: "DELETE_NOTE", notebookId: notebookId, noteId: noteId}))
    }
     
}