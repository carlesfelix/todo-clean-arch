import { Dispatch, SetStateAction } from 'react';
import { InputTextProps } from '../../../components/InputText';
import { TaskListState } from '../../redux/slices/taskList';
import PropsWithDispatch from '../../types/PropsWithDispatch';
import Task from '../../types/Task';

export type TaskPageActionsProps = PropsWithDispatch<{
  setTaskForm: Dispatch<SetStateAction<TaskForm>>;
  taskForm: TaskForm;
}>;

export type TaskPageActionReturn = {
  addTask: () => void;
  deleteTask: (task: Task) => void;
  taskForm: {
    title: InputTextProps
  };
}

export type TaskForm = { title: string };

export type UseTaskPageProps = {};

export type UseTaskPageReturn = {
  taskForm: TaskForm;
  tasks: TaskListState,
  setTaskForm: Dispatch<SetStateAction<TaskForm>>;
  totalTasks: number;
};
