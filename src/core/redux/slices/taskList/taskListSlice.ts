import Task from '../../../types/Task';
import { createSlice, PayloadAction } from '../../../utils/redux-toolkit';
import initialState from './initialState';

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    getTaskListInProgress: state => {
      return {
        ...state,
        data: [],
        error: false,
        inProgress: true
      };
    },
    getTaskListSuccess: (state, action: PayloadAction<{ tasks: Task[] }>) => {
      const { payload } = action;
      const { tasks } = payload;
      return {
        ...state,
        data: tasks,
        error: false,
        inProgress: false
      };
    },
    getTaskListError: (state) => {
      return {
        ...state,
        data: [],
        error: true,
        inProgress: false
      };
    },
    addTask: (state, action: PayloadAction<{ task: Task }>) => {
      return {
        ...state,
        data: [
          action.payload.task,
          ...state.data
        ]
      };
    },
    deleteTask: (state, action: PayloadAction<{ task: Task }>) => {
      return {
        ...state,
        data: state.data.filter(({ id }) => action.payload.task.id !== id)
      };
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  getTaskListInProgress,
  getTaskListSuccess,
  getTaskListError,
  addTask,
  deleteTask
} = taskListSlice.actions;

export default taskListSlice;
