export default function addNote(note) {
    return (dispatch) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({note})
        }
        
        // fetch('http://localhost:3000/notebooks', options)
        // .then(response => response.json())
        // .then(notebook => {
        //     dispatch({type: 'ADD_NOTEBOOK', payload: notebook})
        // })
        
    }
}