import Task from '../../../types/Task';
import initialState from './initialState';
import topAgentSlice, {
  getTaskListError, getTaskListInProgress,
  getTaskListSuccess
} from './taskListSlice';
import { TaskListState } from './types';

const { reducer } = topAgentSlice;

test('should handle todo progress', () => {
  expect(reducer(initialState, getTaskListInProgress())).toEqual({
    data: [],
    error: false,
    inProgress: true
  });
});

test('should handle todo success', () => {
  const previousState: TaskListState = {
    data: [],
    error: false,
    inProgress: true
  };
  const taskListMock: Task[] = [
    {
      id: 1234,
      title: 'Task 1'
    },
    {
      id: 2345,
      title: 'Task 2'
    },
  ];
  expect(
    reducer(
      previousState,
      getTaskListSuccess({
        tasks: taskListMock
      })
    )
  ).toEqual({
    data: taskListMock,
    error: false,
    inProgress: false
  });
});

test('should handle todo error', () => {
  const previousState: TaskListState = {
    data: [],
    error: false,
    inProgress: true
  };
  expect(
    reducer(
      previousState,
      getTaskListError()
    )
  ).toEqual({
    data: [],
    error: true,
    inProgress: false
  });
})
