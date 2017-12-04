import "./AddTask.css";

import React, { Component } from "react";
import PropTypes            from "prop-types";

export default class AddTask extends Component {
    static propTypes = {
        addTask: PropTypes.func.isRequired,
        text: PropTypes.string
    };

    state = {
        text: this.props.text || ""
    }

    handleAddText = () => {
        if (this.state.text.trim().length !== 0) {
            this.props.addTask(this.state.text);
        }

        this.setState({ text: "" });
    }

    handleChange = e => {
        this.setState({text: e.target.value});
    }

    handleSubmit = e => {
        if (e.which === 13) {
            this.handleAddText();
        }
    }

    handleButtonClick = e => {
        this.handleAddText();
    }

    render() {
        return (
            <div className="fvp-addtask-container">
                Add Task: 
                <input 
                    type="text"
                    autoFocus="true" 
                    value={this.state.text} 
                    id="addTaskInput"
                    onChange={this.handleChange}
                    onKeyDown={this.handleSubmit}  />
                <button value="Add" onClick={this.handleButtonClick}>Add</button></div>
        )
    }
}