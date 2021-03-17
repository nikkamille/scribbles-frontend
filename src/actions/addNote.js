export default function addNote(note) {
    // return (dispatch) => {
    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({note})
    //     }
        
    //     fetch('http://localhost:3000/notes', options)
    //     .then(response => response.json())
    //     .then(console.log)
    //     // .then(notebook => {
    //     //     dispatch({type: 'ADD_NOTE', payload: notebook})
    //     // })
        
    // }

    return (dispatch) => {
        fetch('http://localhost:3000/notes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({note})
        })
        .then(result => result.text())
        // .then(response => response.json())
        .then(note => dispatch({type: 'ADD_NOTE', payload: note}))
    }
}