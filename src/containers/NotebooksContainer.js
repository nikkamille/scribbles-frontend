// This will be a route '/notebooks'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Notebooks from '../components/Notebooks';
import fetchNotebooks from '../actions/fetchNotebooks';
import NewNotebookButton from '../components/NewNotebookButton';

class NotebooksContainer extends Component {
    
    componentDidMount() {
        this.props.fetchNotebooks()
    }
    
    render() {
        return(
            <div>
                {/* <Switch> */}
                    <Route exact path="/notebooks">
                        <NewNotebookButton />
                        {/* This will route to ./notebooks/new */}
                        <Notebooks notebooks={this.props.notebooks}/>
                    </Route>
                {/* </Switch> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notebooks: state.notebooks || []
    }
}

export default connect(mapStateToProps, { fetchNotebooks })(NotebooksContainer)