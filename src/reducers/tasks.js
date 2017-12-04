import { ADD_TASK, DELETE_TASK, READD_TASK, COMPLETE_TASK, SELECT_TASK, SKIP_TASK }    from "../constants/ActionTypes";
import { VIEW_LIST }                                                                   from "../constants/MainViews";

const initialState = [];

export default function tasks(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            var id = 1;
            if (state.length > 0) {
                id = state[state.length - 1].id + 1;
            }

            return [
                ...state,
                {
                    id,
                    text: action.text,
                    isComplete: false,
                    isSelected: false,
                    isReAdded: false,
                    isSkipped: false
                }
            ]

        case SELECT_TASK:
            var indexOfId = state.findIndex(task => { return task.id === action.id});
            var task = state[indexOfId];
            task.isSelected = true;
            return [
                ...state.slice(0, indexOfId),
                task,
                ...state.slice(indexOfId + 1)
            ]
            
        case SKIP_TASK:
            var indexOfId = state.findIndex(task => { return task.id === action.id});
            var task = state[indexOfId];
            task.isSkipped = true;
            return [
                ...state.slice(0, indexOfId),
                task,
                ...state.slice(indexOfId + 1)
            ]
        
        case COMPLETE_TASK:
            var indexOfId = state.findIndex(task => { return task.id === action.id});
            var task = state[indexOfId];
            task.isComplete = true;
            task.isSelected = false;
            return [
                ...state.slice(0, indexOfId),
                task,
                ...state.slice(indexOfId + 1)
            ]

        case READD_TASK:
            var indexOfId = state.findIndex(task => { return task.id === action.id});
            var task = state[indexOfId];
            task.isReAdded = true;
            task.isComplete = false;
            task.isSelected = false;

            var id = 1;
            if (state.length > 0) {
                id = state[state.length - 1].id + 2;
            }
            return [
                ...state.slice(0, indexOfId),
                task,
                ...state.slice(indexOfId + 1),
                {
                    id,
                    text: task.text,
                    isComplete: false,
                    isSelected: false,
                    isReAdded: false,
                    isSkipped: false
                }
            ]

        case DELETE_TASK:
            var indexOfId = state.findIndex(task => { return task.id === action.id});
            return [
                ...state.slice(0, indexOfId),
                ...state.slice(indexOfId + 1)
            ]

        case VIEW_LIST:
            // Reset any skipped flags.
            var updatedState = state.map((task) => {
                task.isSkipped = false;

                return task;
            });

            return updatedState;
        default:
            return state;
    }
}