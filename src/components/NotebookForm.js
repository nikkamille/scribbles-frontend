import React, { Component } from 'react';

class NotebookForm extends Component {
    
    state = {title: ""}
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })        
    }
    
    render() {
        return(
            <div>
                Create a new notebook!
                <form>
                    <input type="text" placeholder="Title" value={this.state.title} name="title" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default NotebookForm