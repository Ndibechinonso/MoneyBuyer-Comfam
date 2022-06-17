export type AppDispatchProps<T = any> = {
    type: string;
    payload?: T;
  }