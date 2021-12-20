import Agent from '../../../types/Agent';
import initialState from './initialState';
import topAgentSlice, {
  getTopAgentsInProgress,
  getTopAgentsSuccess,
  getTopAgentsError
} from './topAgentSlice'
import { TopAgentState } from './types';

const { reducer } = topAgentSlice;
test('should handle top agents progress', () => {
  expect(reducer(initialState, getTopAgentsInProgress())).toEqual({
    data: [],
    error: false,
    inProgress: true
  });
});

test('should handle top agents success', () => {
  const previousState: TopAgentState = {
    data: [],
    error: false,
    inProgress: true
  };
  const agentsMock: Agent[] = [
    {
      commission: 1,
      id: 'aa',
      name: 'Agent',
      progress: 123,
      score: 1234
    }
  ];
  expect(
    reducer(
      previousState,
      getTopAgentsSuccess({
        agents: agentsMock
      })
    )
  ).toEqual({
    data: agentsMock,
    error: false,
    inProgress: false
  });
});

test('should handle top agents error', () => {
  const previousState: TopAgentState = {
    data: [],
    error: false,
    inProgress: true
  };
  expect(
    reducer(
      previousState,
      getTopAgentsError()
    )
  ).toEqual({
    data: [],
    error: true,
    inProgress: false
  });
})
