import { useEffect } from 'react';
import { getTopAgentsAction } from '../redux/actions/top-agents.actions';
import { RootState } from '../redux/config/store';
import Agent from '../types/Agent';
import AsyncState from '../types/AsyncState';
import { useDispatch, useSelector } from '../utils/react-redux';

export default function useGetTopAgents(): AsyncState<Agent[]> {
  const dispatch = useDispatch();
  const agents = useSelector((state: RootState) => state.topAgent);
  useEffect(() => {
    dispatch(getTopAgentsAction());
  }, [ dispatch ]);
  return agents;
}
