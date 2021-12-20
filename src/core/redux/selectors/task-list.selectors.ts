import { createSelector } from '../../utils/redux-toolkit';
import { RootState } from '../config/store';

export const taskListCount = createSelector(
  (state: RootState) => state.taskList,
  taskList => taskList.data.length
);
