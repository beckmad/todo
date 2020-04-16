import React, {Component} from 'react';

import './add.css';

class Add extends Component {
    state = {
        text: ''
    };

    keyDown = (e) => {
        this.setState({text: e.target.value});
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdded(this.state.text);
        this.clearInput();
    };
    clearInput = () => {
        this.setState({text: ''});
    };

    render() {
        return (
            <form className="input-group" onSubmit={this.onSubmit}>
                <input id='add-task-input' type="text" className="form-control" placeholder="Add task"
                       onChange={this.keyDown} value={this.state.text}/>
                <div className="input-group-append">
                    <button className="btn btn-dark" type="button" onClick={this.clearInput}>Clear</button>
                    <button className="btn btn-success" type="button"
                            onClick={this.onSubmit}>Add
                    </button>
                </div>
            </form>
        )
    }
}

export default Add;