import "./TaskList.css";

import React, { Component } from "react";
import PropTypes            from "prop-types";

import Task                 from "./Task";

export default class TaskList extends Component {
    static propTypes = {
        tasks: PropTypes.array.isRequired,
        selectTask: PropTypes.func.isRequired,
        completeTask: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired,
        reAddTask: PropTypes.func.isRequired,
        chooseTasks: PropTypes.func.isRequired
    };

    handleChooseTasksClick = () => {
        this.props.chooseTasks();
    };

    getIncompleteTasks = () => {
        var count = 0;

        this.props.tasks.forEach((task) => { 
            if (!task.isComplete && !task.isReAdded) {
                count++;
            }
        });

        return count;
    };

    render() {
        var taskElements = [];

        taskElements = this.props.tasks.map((task) => 
            <Task 
                task={task} 
                selectTask={this.props.selectTask}
                completeTask={this.props.completeTask} 
                deleteTask={this.props.deleteTask} 
                reAddTask={this.props.reAddTask} />);

        if (taskElements.length > 0) {
            return (
                <div>
                    <div>
                        {this.getIncompleteTasks() > 1 ? <button onClick={this.handleChooseTasksClick}>Choose Tasks</button> : ""}
                    </div>
                    <ul>{taskElements}</ul>
                </div>
            );
        }

        else {
            return(
                <div>Congratulations! You don't have any tasks to do!</div>
            );
        }
    }
}