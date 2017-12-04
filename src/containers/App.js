import "./App.css";

import React                  from "react";
import PropTypes              from "prop-types";
import { bindActionCreators } from "redux";
import { connect }            from "react-redux";

import Banner                 from "../components/Banner";
import MainView               from "../components/MainView";
import AddTask                from "../components/AddTask";

import * as Actions           from "../actions";

const App = ({state, actions}) => (
  <div>
    <Banner />
    <MainView 
      tasks={state.tasks} 
      view={state.view}
      selectTask={actions.selectTask}
      completeTask={actions.completeTask}
      reAddTask={actions.reAddTask}
      deleteTask={actions.deleteTask}
      chooseTasks={actions.viewChooseTasks}
      skipTask={actions.skipTask} 
      viewList={actions.viewList} />
    <AddTask addTask={actions.addTask} />
  </div>
);

App.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({  
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
