import "./TaskChoice.css";

import React, { Component } from "react";
import PropTypes            from "prop-types";

export default class TaskChoice extends Component {
    static propTypes = {
        task: PropTypes.object.isRequired,
        selectTask: PropTypes.func.isRequired,
        viewList: PropTypes.func.isRequired
    };

    handleSelectClick = () => {
        this.props.selectTask(this.props.task.id);
    }

    handleViewClick = () => {
        this.props.viewList();
    };

    render() {
        if (typeof this.props.task !== "undefined") {
            var { id, text, isComplete, isSelected, isReAdded } = this.props.task;
        
            var taskClass = "incomplete";
            taskClass = isComplete ? "complete" : taskClass;
            taskClass = isSelected ? "selected" : taskClass;
            taskClass = isReAdded ? "re-added" : taskClass;

            return(
                <li key={id} className={taskClass}>
                    <button onClick={this.handleSelectClick}>Select</button>
                    {text}{" "}</li>
            );
        }

        else {
            return(
                <div>All done selecting tasks!{" "}<button onClick={this.handleViewClick}>View List</button></div>
            );
        }
    }
}