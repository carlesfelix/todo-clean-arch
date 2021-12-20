import { AnyAction, Dispatch } from '../utils/redux-toolkit';

type PropsWithDispatch<
  Props extends object = {},
  TDispatch extends AnyAction = any
> = Props & {
  dispatch: Dispatch<TDispatch>;
};

export default PropsWithDispatch;
