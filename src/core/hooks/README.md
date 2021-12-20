# CORE HOOKS
All small reusable state logic must be placed in this folder.\
This hooks must be as atomic as possible.

## Some use cases
- Getting a state of a redux.
```ts
export default function useTopAgents(): AsyncState<Agent[]> {
  const agents = useSelector((state: RootState) => state.topAgent);
  return agents;
}
```
- Getting a state of a redux selector
```ts
export default function useTopAgentsCount(): AsyncState<Agent[]> {
  const dispatch = useDispatch();
  const count = useSelector(topAgentsCount);
  return count;
}
```
- Dispatch actions against redux.
```ts
export default function loadPerformanceChartPeriod(period?: string): AsyncState<Chart[]> {
  const dispatch = useDispatch();
  const chart = useSelector((state: RootState) => state.performancePeriodChart);
  useEffect(() => {
    if (period) {
      dispatch(getPerformanceChartPeriodAction(period));
    } else {
      dispatch(clearPerformanceChartPeriodAction());
    }
  }, [ dispatch, period ]);
  return chart;
}
```
