// This will be a route '/notebooks'
import React, { Component } from 'react';
import Notebooks from '../components/Notebooks';

class NotebooksContainer extends Component {
    render() {
        return(
            <div>
                I'm in my NotebooksContainer!
                <Notebooks/>
            </div>
        )
    }
}

export default NotebooksContainer