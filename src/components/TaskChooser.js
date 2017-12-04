import "./TaskChooser.css";

import React, { Component } from "react";
import PropTypes            from "prop-types";
import TaskChoice           from "./TaskChoice";

export default class TaskChooser extends Component {
    static propTypes = {
        tasks: PropTypes.array.isRequired,
        selectTask: PropTypes.func.isRequired,
        skipTask: PropTypes.func.isRequired,
        viewList: PropTypes.func.isRequired
    }


    getIncompleteTasks = () => {
        return this.props.tasks.filter((task) => {
            return !task.isComplete && !task.isReAdded && !task.isSkipped;
        });
    };

    getSelectedTasks = () => {
        return this.getIncompleteTasks().filter((task) => { return task.isSelected; });
    };

    getNumberOfSelectedTasks = () => {
        return (this.getSelectedTasks()).length;
    };

    getLastSelectedTask = () => {
        var selectedCount = this.getNumberOfSelectedTasks();
        return this.getSelectedTasks()[selectedCount - 1];
    };

    getRootTask = () => {
        var numberOfSelectedTasks = this.getNumberOfSelectedTasks();
        var rootTask;

        if (numberOfSelectedTasks === 0) {
            rootTask = this.getIncompleteTasks()[0];
        } else {
            rootTask = this.getLastSelectedTask();
        }

        return rootTask;
    };

    getCompareTask = () => {
        var rootTask = this.getRootTask();
        var rootTaskIndex = this.getIncompleteTasks().indexOf(rootTask);
        return this.getIncompleteTasks()[rootTaskIndex+1];
    };

    handleSelectTask = (id) => {
        if (id === this.getRootTask().id) {
            this.props.skipTask(this.getCompareTask().id);
        }

        this.props.selectTask(id);
    };

    
    render() {
        return (
            <div>
                Which do you want to do first?
                <TaskChoice 
                    task={this.getRootTask()}
                    selectTask={this.handleSelectTask}
                    viewList={this.props.viewList} />
                <TaskChoice
                    task={this.getCompareTask()}
                    selectTask={this.handleSelectTask}
                    viewList={this.props.viewList} />
            </div>
        );
    }
}