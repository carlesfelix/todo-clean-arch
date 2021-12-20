import { useEffect } from 'react';
import { getTaskListAction } from '../redux/actions/task-list.actions';
import { useDispatch } from '../utils/react-redux';

export default function useGetTaskList(): void {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTaskListAction());
  }, [ dispatch ]);
}
