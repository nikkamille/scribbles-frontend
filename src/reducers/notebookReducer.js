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
            return {
                ...state
            }
        default:
            return state
    }
    

}