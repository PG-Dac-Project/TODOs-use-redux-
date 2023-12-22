import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log(action.payload)
            return [...state, action.payload];
        // it's return array that conatins privious state element and new element from payload also

        case UPDATE_TODO:

            const updatedState = state.map((todo) => {
                if (todo.id == action.payload.toDOId) {
                    todo.title = action.payload.toDO.title;
                    todo.description = action.payload.toDO.description;

                }

                return todo;

            })
            return updatedState;
        case DELETE_TODO:
            const newState = state.filter((toDo) => toDo.id !== action.payload);
            return newState;
        // return state which are not mathcing playloads id

        default:
            return state;
    }
}