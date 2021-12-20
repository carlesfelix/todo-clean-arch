import { useState } from 'react';
import { useSelector } from 'react-redux';
import useGetTaskList from '../../hooks/useGetTaskList';
import { RootState } from '../../redux/config/store';
import { taskListCount } from '../../redux/selectors/task-list.selectors';
import { UseTaskPageProps, UseTaskPageReturn } from './types';

export default function usePerformancePage(
  props: UseTaskPageProps
): UseTaskPageReturn {
  const tasks = useSelector((state: RootState) => state.taskList);
  const totalTasks = useSelector(taskListCount);
  useGetTaskList();
  const [ taskForm, setTaskForm ] = useState<{ title: string }>({
    title: ''
  });

  // Return complex state (a bunch of combined atomic hooks)
  return {
    taskForm,
    setTaskForm,
    tasks,
    totalTasks
  };
}
