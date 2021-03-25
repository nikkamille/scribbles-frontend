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
            const updatedNotebooks = [...state.notebooks]
            updatedNotebooks[index] = {...updatedNotebooks[index], notes: [...updatedNotebooks[index].notes, action.payload]}
            return {
                notebooks: updatedNotebooks
            }
        default:
            return state
    }
    

}