import Agent from '../../types/Agent';
import AsyncState from '../../types/AsyncState';
import PropsWithDispatch from '../../types/PropsWithDispatch';

export type PerformancePageInteractorProps = PropsWithDispatch<{
  otherProp: string
}>;

export type PerformancePageInteractorReturn = {
  selectChartPeriod: (period: string) => void;
}

export type UsePerformancePageProps = {};

export type UsePerformancePageReturn = {
  topAgents: AsyncState<Agent[]>
};
