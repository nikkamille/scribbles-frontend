export default function fetchNotebooks(notebooks) {
    return (dispatch) => {
        fetch('http://localhost:3000/notebooks')
        .then(response => response.json())
        .then(notebooks => {
            dispatch({type: "FETCH_NOTEBOOKS", payload: notebooks})
        })
    }
}