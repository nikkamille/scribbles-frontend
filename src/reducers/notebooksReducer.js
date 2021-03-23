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
        default:
            return state
    }
    

}