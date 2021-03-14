import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import addNotebook from '../actions/addNotebook'

class NotebookForm extends Component {
    
    state = {title: ""}
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addNotebook(this.state)
        this.setState({title: ""})
        this.props.history.push("/notebooks")
        // Add a default value for title - if notebook title is empty, it should show up as "Untitled Notebook"
    }
    
    render() {
        return(
            <div>
                Create a new notebook!
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Title" value={this.state.title} name="title" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, { addNotebook })(NotebookForm))