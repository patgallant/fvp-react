import { VIEW_LIST, VIEW_SELECTED, VIEW_COMPLETED, VIEW_CHOOSE, VIEW_ACTIVE }   from "../constants/MainViews";

const initialState = { current: VIEW_LIST };

export default function view(state = initialState, action) {
    switch (action.type) {
        case VIEW_LIST:
            return { current: VIEW_LIST };
        case VIEW_CHOOSE:
            return { current: VIEW_CHOOSE };
        default: 
            return state;
    }
}