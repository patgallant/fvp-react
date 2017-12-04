import * as ActionType from "../constants/ActionTypes";
import * as Views from "../constants/MainViews";

export const addTask = text => ({ type: ActionType.ADD_TASK, text });
export const deleteTask = id => ({ type: ActionType.DELETE_TASK, id });
export const completeTask = id => ({ type: ActionType.COMPLETE_TASK, id });
export const selectTask = id => ({ type: ActionType.SELECT_TASK, id });
export const reAddTask = id => ({type: ActionType.READD_TASK, id });
export const viewList = () => ({ type: Views.VIEW_LIST });
export const viewChooseTasks = () => ({ type: Views.VIEW_CHOOSE });
export const skipTask = id => ({type: ActionType.SKIP_TASK, id});