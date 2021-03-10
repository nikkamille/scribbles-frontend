export default function notebookReducer(state, action) {

    switch (action.type) {
        case 'FETCH_NOTEBOOKS':
            return {
                notebooks: action.payload
            }
        default:
            return state
    }
    

}