import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import addNotebook from '../actions/addNotebook';
import editNotebook from '../actions/editNotebook';

class NotebookForm extends Component {
    
    state = {
        title: this.props.notebook ? this.props.notebook.title : "",
        id: this.props.notebook ? this.props.notebook.id : ""
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(!this.props.notebook) { 
            this.props.addNotebook(this.state)
            this.props.history.push("/notebooks")
        } else {
            let notebookId = this.props.notebook.id
            let editedNotebook = {...this.state, id: notebookId}
            this.props.editNotebook(editedNotebook)
            this.props.history.push(`/notebooks/${notebookId}`)
        }
        this.setState({title: ""})
        // Add a default value for title - if notebook title is empty, it should show up as "Untitled Notebook"
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Title" value={this.state.title} name="title" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, { addNotebook, editNotebook })(NotebookForm))