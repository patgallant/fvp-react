import "./Task.css";

import React, { Component } from "react";
import PropTypes            from "prop-types";

export default class Task extends Component {
    static propTypes = {
        task: PropTypes.object.isRequired,
        selectTask: PropTypes.func.isRequired,
        completeTask: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired,
        reAddTask: PropTypes.func.reAddTask
    };

    handleDeleteClick = () => {
        this.props.deleteTask(this.props.task.id);
    }

    handleCompleteClick = () => {
        this.props.completeTask(this.props.task.id);
    }

    handleSelectClick = () => {
        this.props.selectTask(this.props.task.id);
    }

    handleReAddedClick = () => {
        this.props.reAddTask(this.props.task.id);
    }

    render() {
        var { id, text, isComplete, isSelected, isReAdded } = this.props.task;
        
        var taskClass = "incomplete";
        taskClass = isComplete ? "complete" : taskClass;
        taskClass = isSelected ? "selected" : taskClass;
        taskClass = isReAdded ? "re-added" : taskClass;

        return(
            <li key={id} className={taskClass}>
                { !isComplete && !isSelected && !isReAdded ? <button onClick={this.handleSelectClick}>Select</button> : "" }
                {text}{" "}
                { !isComplete && isSelected ? <button onClick={this.handleCompleteClick}>Complete</button> : "" }
                { isSelected ? <button onClick={this.handleReAddedClick}>Re-Add</button> : "" }
                { this.props.deleteTask !== "undefined" ? <button onClick={this.handleDeleteClick}>Delete</button> : "" }</li>
        );
    }
}