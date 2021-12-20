import { addTaskAction, deleteTaskAction } from '../../redux/actions/task-list.actions';
import Task from '../../types/Task';
import { TaskPageActionReturn, TaskPageActionsProps } from './types';

export default function TaskPageActions(props: TaskPageActionsProps): TaskPageActionReturn {
  const {
    dispatch, setTaskForm,
    taskForm
  } = props;
  return {
    addTask: () => {
      const task: Task = { title: taskForm.title, id: Date.now() };
      dispatch(addTaskAction(task));
      setTaskForm(old => ({
        ...old,
        title: ''
      }));
    },
    deleteTask: task => {
      dispatch(deleteTaskAction(task));
    },
    taskForm: {
      title: {
        onChange: newTaskTitle => {
          setTaskForm(old => ({
            ...old,
            title: newTaskTitle
          }));
        },
        value: taskForm.title
      }
    }
  };
}
