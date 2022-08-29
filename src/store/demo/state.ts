export interface State {
  readonly list: string[];
  readonly error?: string;
  readonly isLoading: boolean;
}

export const initialState: State = {
  isLoading: false,
  error: "",
  list: []
};
