type AsyncState<T = any> = {
  inProgress: boolean;
  error: boolean;
  data: T;
};

export default AsyncState;
