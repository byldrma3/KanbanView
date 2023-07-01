import { combineReducers } from "@reduxjs/toolkit";
import TaskSlice from "./features/task";

const rootReducer = combineReducers({
	task: TaskSlice,
});

export default rootReducer;
