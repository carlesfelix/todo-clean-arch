import { createSelector } from '../../utils/redux-toolkit';
import { RootState } from '../config/store';

export const topAgentsCount = createSelector(
  (state: RootState) => state.topAgent,
  topAgent => topAgent.data.length
);
