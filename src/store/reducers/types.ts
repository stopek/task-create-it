export interface ILoadingState {
  state: {
    error: boolean;
    loading: boolean;
    crash: boolean;
  }
}

export type TVariableState = keyof ILoadingState["state"];