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
            let notebookId = action.payload.notebook_id
            
            // let note = state.notebooks.map(notebook => {
            //     if (notebook.id === action.payload.notebook_id) {
            //         return 
            //     }
            // })
            return {
                ...state, notes: [...state.notebooks[action.payload.notebook_id].notes, action.payload]
            }
        default:
            return state
    }
    

}