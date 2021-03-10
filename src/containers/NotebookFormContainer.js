// This will be a route '/notebooks/new'
import React, { Component } from 'react';
import NotebookForm from '../components/NotebookForm';

class NotebookFormContainer extends Component {
    render() {
        return (
            <div>
                My NotebookFormContainer
                <NotebookForm/>
            </div>
        )
    }
}

export default NotebookFormContainer