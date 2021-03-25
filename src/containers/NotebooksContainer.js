// This will be a route '/notebooks'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Notebooks from '../components/Notebooks';
import Notebook from '../components/Notebook';
import fetchNotebooks from '../actions/fetchNotebooks';
import NewNotebookButton from '../components/NewNotebookButton';
import NotebookForm from '../components/NotebookForm';

class NotebooksContainer extends Component {
    
    // componentDidMount() {
    //     this.props.fetchNotebooks()
    // }
    
    render() {
    // debugger
    console.log(this.props.notebooks)
        return(
            <>
                <NewNotebookButton/>
                <Notebooks notebooks={this.props.notebooks}/>
            </>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         notebooks: state.notebooks || []
//     }
// }

// export default connect(mapStateToProps, { fetchNotebooks })(NotebooksContainer)
export default NotebooksContainer