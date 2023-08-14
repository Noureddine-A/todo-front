import { configureStore, createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todosList : []
    },
    reducers: {
        addToList: (state, action) => {
            state.todosList = action.payload;
        }
    }
})

export const store = configureStore({
    reducer: {
        todos: todosSlice.reducer
    }
})

export const todosActions = todosSlice.actions;