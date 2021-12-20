import { getTopAgentsAction } from '../../redux/actions/top-agents.actions';
import { PerformancePageInteractorProps, PerformancePageInteractorReturn } from './types';

export default function PerformancePageActions(
  props: PerformancePageInteractorProps
): PerformancePageInteractorReturn {
  const { dispatch } = props;
  return {
    selectChartPeriod: (period: string) => {
      // dispatch(selectChartPeriodAction());
      dispatch(getTopAgentsAction());
    }
  };
}
