import { TaskPageActionReturn, TaskPageActionsProps } from './types';

export default function TaskPageActions(props: TaskPageActionsProps): TaskPageActionReturn {
  const {
    dispatch, setTaskForm, setTasks,
    taskForm, tasks
  } = props;
  return {
    addTask: () => {
      setTasks(old => [
        { title: taskForm.title, id: Date.now() },
        ...old
      ]);
      setTaskForm(old => ({
        ...old,
        title: ''
      }));
    },
    deleteTask: task => {
      setTasks(old => old.filter(({ id }) => task.id !== id));
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
    },
    tasks
  };
}
