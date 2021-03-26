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
        case 'EDIT_NOTE':
            const editedNote = state.notes.map(note => note.id === action.payload.id ? action.payload : note)
            return {
                notes: editedNote
            }
        case 'DELETE_NOTE':
            const newNotes = state.notes.filter(note => note.id !== action.noteId)
            return {
                notes: newNotes
            }
        default:
            return state
    }
}