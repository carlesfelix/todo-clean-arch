import { Dispatch } from '../../utils/redux-toolkit';
import { getTopAgentsError, getTopAgentsInProgress, getTopAgentsSuccess } from '../slices/topAgent/topAgentSlice';

export function getTopAgentsAction(): (dispatch: Dispatch) => Promise<void> {
  return async dispatch => {
    dispatch(getTopAgentsInProgress());
    try {
      dispatch(getTopAgentsSuccess({ agents: [] }));
    } catch {
      dispatch(getTopAgentsError());
    }
  }
}
