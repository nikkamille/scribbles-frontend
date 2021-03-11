import React, { Component } from 'react';

class NotebookForm extends Component {
    render() {
        return(
            <div>
                Create a new notebook!
                <form>
                    <input type="text" placeholder="Title" />
                </form>
            </div>
        )
    }
}

export default NotebookForm