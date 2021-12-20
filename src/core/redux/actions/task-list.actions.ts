import Task from '../../types/Task';
import { Dispatch } from '../../utils/redux-toolkit';
import {
  addTask,
  deleteTask,
  getTaskListError,
  getTaskListInProgress,
  getTaskListSuccess
} from '../slices/taskList';

export function getTaskListAction(): (dispatch: Dispatch) => Promise<void> {
  return async dispatch => {
    dispatch(getTaskListInProgress());
    try {
      dispatch(getTaskListSuccess({
        tasks: [
          { id: 123, title: 'Task 1 from api' },
          { id: 124, title: 'Task 2 from api' },
        ]
      }));
    } catch {
      dispatch(getTaskListError());
    }
  }
}

export function addTaskAction(task: Task): (dispatch: Dispatch) => void {
  return dispatch => {
    dispatch(addTask({ task }))
  }
}

export function deleteTaskAction(task: Task): (dispatch: Dispatch) => void {
  return dispatch => {
    dispatch(deleteTask({ task }))
  }
}
