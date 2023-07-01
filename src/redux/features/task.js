import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const itemsFromBackend = [
	{ id: uuid(), content: "First task" },
	{ id: uuid(), content: "Second task" },
	{ id: uuid(), content: "Third task" },
	{ id: uuid(), content: "Fourth task" },
	{ id: uuid(), content: "Fifth task" },
	{ id: uuid(), content: "Sixth task" },
];

const columnsFromBackend = {
	[uuid()]: {
		name: "Backlog",
		items: itemsFromBackend,
	},
	[uuid()]: {
		name: "To Do",
		items: [],
	},
	[uuid()]: {
		name: "In Progress",
		items: [],
	},
	[uuid()]: {
		name: "Test",
		items: [],
	},
};

const TaskSlice = createSlice({
	name: "todo",
	initialState: columnsFromBackend,
	reducers: {
		addTask: (state, action) => {
			state[action.payload.columnId].items.push({
				id: uuid(),
				content: action.payload.content,
			});
		},
		updateTask: (state, action) => {
			Object.assign(state, action.payload);
		},
	},
});

export const { addTask, updateTask } = TaskSlice.actions;
export default TaskSlice.reducer;
