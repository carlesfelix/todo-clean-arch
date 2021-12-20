import { combineReducers } from '../utils/redux-toolkit';
import topAgentSlice from './slices/topAgent/topAgentSlice';

// Place here your reducers
const reducers = combineReducers({
  topAgent: topAgentSlice.reducer
});

export type ReducersState = ReturnType<typeof reducers>;

export default reducers;
