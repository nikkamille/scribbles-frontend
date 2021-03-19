export default function notebookReducer(state, action) {
    // debugger
    switch (action.type) {
        case 'FETCH_NOTEBOOKS':
            return {
                notebooks: action.payload
            }
        case 'ADD_NOTEBOOK':
            return {
                ...state, notebooks: [...state.notebooks, action.payload]
            }
        case 'ADD_NOTE':
            // let notebookId = action.payload.notebook_id
            // Go back to video 9 if we get an error for the store. This should render the note right away.
            return {
                ...state, note: [...state.notebooks[action.payload.notebook_id].notes, action.payload]
            }
        case 'DELETE_NOTE':
            // Fix reducer to return notes under a notebook.
            const newNotes = state.notebooks[action.notebookId].notes.filter(note => note.id !== action.noteId)
            return {
                notes: newNotes
            }
        default:
            return state
    }
    

}