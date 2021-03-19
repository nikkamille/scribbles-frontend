export default function fetchNotes() {
    return (dispatch) => {
        fetch('http://localhost:3000/notes')
        .then(response => response.json())
        .then(notes => {
            dispatch({type: 'FETCH_NOTES', payload: notes})
        })
    }
}