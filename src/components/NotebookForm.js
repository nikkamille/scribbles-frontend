import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import addNotebook from '../actions/addNotebook';
import editNotebook from '../actions/editNotebook';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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
    }
    
    render() {
        return(
            <Container>
                <Box m={8}>
                    <Typography variant="h5">
                        Create a New Notebook
                    </Typography>
                    <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                        <TextField required fullWidth margin="normal" type="text" label="Title" value={this.state.title} name="title" onChange={this.handleChange} variant="outlined"/>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </form>
                </Box>
            </Container>
        )
    }
}

export default withRouter(connect(null, { addNotebook, editNotebook })(NotebookForm))