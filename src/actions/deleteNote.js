export default function deleteNote(notebookId, noteId) {

    return (dispatch) => {
        debugger
        return fetch(`http://localhost:3000/notebooks/${notebookId}/notes/${noteId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(note => {
            dispatch({type: "DELETE_LIST", payload: noteId})
        })
    }
     
}