import "./MainView.css";

import React, { Component } from "react";
import PropTypes            from "prop-types";

import { VIEW_LIST, VIEW_SELECTED, VIEW_COMPLETED, VIEW_CHOOSE, VIEW_ACTIVE }   from "../constants/MainViews";

import TaskList             from "./TaskList";
import TaskChooser          from "./TaskChooser";

export default class MainView extends Component {
    static propTypes = {
        tasks: PropTypes.array.isRequired,
        view: PropTypes.object.isRequired,
        selectTask: PropTypes.func.isRequired,
        completeTask: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired,
        reAddTask: PropTypes.func.isRequired,
        chooseTasks: PropTypes.func.isRequired,
        skipTask: PropTypes.func.isRequired,
        viewList: PropTypes.func.isRequired
    };

    render() {
        switch (this.props.view.current) {
            case VIEW_LIST:
                return (
                    <TaskList 
                        tasks={this.props.tasks}  
                        selectTask={this.props.selectTask}
                        completeTask={this.props.completeTask}
                        deleteTask={this.props.deleteTask} 
                        reAddTask={this.props.reAddTask}
                        chooseTasks={this.props.chooseTasks} />
                );

            case VIEW_CHOOSE:
                return (
                    <TaskChooser 
                        tasks={ this.props.tasks }
                        selectTask={ this.props.selectTask }
                        skipTask={ this.props.skipTask }
                        viewList={ this.props.viewList } />
                );

            default:
                return (
                    <div>This view has not been developed yet</div>
                );
        }
    }
}