import { combineReducers }  from "redux";
import tasks                from "./tasks";
import view                 from "./views";

const rootReducer = combineReducers({
    tasks,
    view
});

export default rootReducer;