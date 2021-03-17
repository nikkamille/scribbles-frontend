import React, { Component } from 'react';
import { connect } from 'react-redux';
import addNote from '../actions/addNote';

class NoteForm extends Component {
    
    state = {
        title: "",
        content: "",
        date: ""
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addNote(this.state, this.props.notebook.id)
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

export default connect(null, { addNote })(NoteForm)