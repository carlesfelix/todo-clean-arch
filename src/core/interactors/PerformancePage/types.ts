import { Dispatch, SetStateAction } from 'react';
import { InputTextProps } from '../../../components/InputText';
import PropsWithDispatch from '../../types/PropsWithDispatch';
import Task from '../../types/Task';

export type TaskPageActionsProps = PropsWithDispatch<{
  setTaskForm: Dispatch<SetStateAction<TaskForm>>;
  setTasks: Dispatch<SetStateAction<Task[]>>;
  taskForm: TaskForm;
  tasks: Task[];
}>;

export type TaskPageActionReturn = {
  addTask: () => void;
  deleteTask: (task: Task) => void;
  taskForm: {
    title: InputTextProps
  };
  tasks: Task[];
}

export type TaskForm = { title: string };

export type UseTaskPageProps = {};

export type UseTaskPageReturn = {
  taskForm: TaskForm;
  tasks: Task[],
  setTaskForm: Dispatch<SetStateAction<TaskForm>>;
  setTasks: Dispatch<SetStateAction<Task[]>>;
};
