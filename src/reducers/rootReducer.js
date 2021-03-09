import notebooksReducer from './reducers/notebooksReducer';

const rootReducer = combineReducers({
    notebooks: notebooksReducer
})

export default rootReducer