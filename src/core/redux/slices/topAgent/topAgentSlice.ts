import { createSlice, PayloadAction } from '../../../utils/redux-toolkit';
import Agent from '../../../types/Agent';
import initialState from './initialState';

export const topAgentSlice = createSlice({
  name: 'topAgent',
  initialState,
  reducers: {
    getTopAgentsInProgress: state => {
      return {
        ...state,
        data: [],
        error: false,
        inProgress: true
      };
    },
    getTopAgentsSuccess: (state, action: PayloadAction<{ agents: Agent[] }>) => {
      const { payload } = action;
      const { agents } = payload;
      return {
        ...state,
        data: agents,
        error: false,
        inProgress: false
      };
    },
    getTopAgentsError: (state) => {
      return {
        ...state,
        data: [],
        error: true,
        inProgress: false
      };
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  getTopAgentsInProgress,
  getTopAgentsSuccess,
  getTopAgentsError
} = topAgentSlice.actions;

export default topAgentSlice;
