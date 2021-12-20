import { combineReducers } from '../utils/redux-toolkit';
import taskListSlice from './slices/taskList';

// Place here your reducers
const reducers = combineReducers({
  taskList: taskListSlice.reducer
});

export type ReducersState = ReturnType<typeof reducers>;

export default reducers;
