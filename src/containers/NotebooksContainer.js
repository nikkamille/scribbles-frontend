// This will be a route '/notebooks'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notebooks from '../components/Notebooks';
import fetchNotebooks from '../actions/fetchNotebooks';

class NotebooksContainer extends Component {
    
    componentDidMount() {
        this.props.fetchNotebooks()
    }
    
    render() {
        return(
            <div>
                I'm in my NotebooksContainer!
                <Notebooks notebooks={this.props.notebooks}/>
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