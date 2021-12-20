import { ReactNode } from 'react';
import { Provider } from './react-redux';
import { store } from '../redux/config/store';

/**
 * 
 * @param props
 * @param props.children App tree which needs access to the core module
 * @returns React component ready for using the core module
 */
export default function CoreProvider(props: { children: ReactNode }) {
  const { children } = props;
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
