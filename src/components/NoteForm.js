import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import addNote from '../actions/addNote';
import editNote from '../actions/editNote';

class NoteForm extends Component {
    
    state = {
        title: this.props.note ? this.props.note.title : "",
        content: this.props.note ? this.props.note.content : "",
        date: this.props.note ? this.props.note.date : ""
    }

    // notebook = this.props.notebook


    handleChange = (event) => {
        // debugger
        this.setState({
            [event.target.name]: event.target.value
        })        
    }

    handleSubmit = (event) => {
        // debugger
        event.preventDefault()
        let notebook = this.props.notebook
        let note = this.state
        console.log(notebook)
        if(!this.props.note) {
            this.props.addNote(this.state, this.props.notebook.id)
            this.props.history.push(`/notebooks/${notebook.id}`)
        } else {
            let notebookId = this.props.note.notebook_id
            let noteId = this.props.note.id
            let editedNote = {...this.state, id: this.props.note.id}
            this.props.editNote(editedNote, notebookId)
            this.props.history.push(`/notebooks/${notebookId}/notes/${noteId}`)
        }
        
        this.setState({
            title: "",
            content: "",
            date: ""
        })
    }

    render() {
        return (
            <div>
                Write your notes here:
                <form onSubmit={this.handleSubmit}>
                    <input type="date" name="date" value={this.state.date} onChange={this.handleChange} /><br/><br/>
                    <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/><br/><br/>
                    <textarea type="textarea" placeholder="Start writing" name="content" value={this.state.content} rows={15} cols={100} onChange={this.handleChange}/><br/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, { addNote, editNote })(NoteForm))