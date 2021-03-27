import React, { Component } from 'react';
import Notebooks from '../components/Notebooks';

class NotebooksContainer extends Component {
    
    render() {
        return(
            <>
                <Notebooks notebooks={this.props.notebooks}/>
            </>
        )
    }
}

export default NotebooksContainer