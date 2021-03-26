export default function notebooksReducer(state = [], action) {
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
        case 'EDIT_NOTEBOOK':
            const editedNotebook = state.notebooks.map(notebook => notebook.id === action.payload.id ? action.payload : notebook)
            return {
                notebooks: editedNotebook
            }
        case 'DELETE_NOTEBOOK':
            const newNotebooks = state.notebooks.filter(notebook => notebook.id !== action.payload)
            return {
                notebooks: newNotebooks
            }
        case 'ADD_NOTE':
            const index = state.notebooks.findIndex(notebook => notebook.id === action.payload.notebook_id)
            const updatedNotebooks = state.notebooks ? [...state.notebooks] : state.notebooks
            updatedNotebooks[index] = {...updatedNotebooks[index], notes: [...updatedNotebooks[index].notes, action.payload]}
            return {
                notebooks: updatedNotebooks
            }
        case 'EDIT_NOTE':
            const editIndex = state.notebooks.findIndex(notebook => notebook.id === action.payload.notebook_id)
            const editedNotes = state.notebooks[editIndex].notes.map(note => note.id === action.payload.id ? action.payload : note)
            const editedNoteNotebooks = [...state.notebooks]
            editedNoteNotebooks[editIndex] = {...editedNoteNotebooks[editIndex], notes: editedNotes}
            return {
                notebooks: editedNoteNotebooks
            }
        case 'DELETE_NOTE':
            const deleteNoteIndex = state.notebooks.findIndex(notebook => notebook.id === action.notebookId)
            const deletedNoteNotebooks = [...state.notebooks]
            deletedNoteNotebooks[deleteNoteIndex] = {...deletedNoteNotebooks[deleteNoteIndex], notes: [...deletedNoteNotebooks[deleteNoteIndex].notes.filter(note => note.id !== action.noteId)]}
            return {
                notebooks: deletedNoteNotebooks
            }
        default:
            return state
    }
    

}