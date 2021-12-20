import { useState } from 'react';
import Task from '../../types/Task';
import { UseTaskPageProps, UseTaskPageReturn } from './types';

export default function usePerformancePage(
  props: UseTaskPageProps
): UseTaskPageReturn {
  const [ taskForm, setTaskForm ] = useState<{ title: string }>({
    title: ''
  });
  const [ tasks, setTasks ] = useState<Task[]>([]);

  // Return complex state (a bunch of combined atomic hooks)
  return {
    taskForm,
    tasks,
    setTaskForm,
    setTasks
  };
}
