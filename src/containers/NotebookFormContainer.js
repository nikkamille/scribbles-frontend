// This will be a route '/notebooks/new'
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NotebookForm from '../components/NotebookForm';

class NotebookFormContainer extends Component {
    render() {
        return (
            <div>
                <Route exact path="/notebooks/new">
                    My NotebookFormContainer
                    <NotebookForm/>
                </Route>
            </div>
        )
    }
}

export default NotebookFormContainer