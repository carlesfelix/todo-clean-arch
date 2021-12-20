import useGetTopAgents from '../../hooks/useGetTopAgents';
import { UsePerformancePageProps, UsePerformancePageReturn } from './types';

export default function usePerformancePage(
  props: UsePerformancePageProps
): UsePerformancePageReturn {
  const topAgents = useGetTopAgents();

  // Return complex state (a bunch of combined atomic hooks)
  return {
    topAgents
  };
}
