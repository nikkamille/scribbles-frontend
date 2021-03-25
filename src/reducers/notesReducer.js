export default function notesReducer(state = [], action) {
    // debugger
    switch (action.type) {
        case 'FETCH_NOTES':
            return {
                notes: action.payload
            }
        case 'ADD_NOTE':
            return {
                ...state, notes: [...state.notes, action.payload]
            }
        case 'DELETE_NOTE':
            // Fix reducer to return notes under a notebook.
            const newNotes = state.notes.filter(note => note.id !== action.noteId)
            return {
                notes: newNotes
            }
        default:
            return state
    }
}