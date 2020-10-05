import { Action, createReducer, on } from '@ngrx/store';
import * as TokensActions from '../@actions/tokens.actions';

export interface State {
    token: string;
    refresh_token: string;
};

export const initialState: State = {
    token: '',
    refresh_token: '',
};
 
const _succesfulLoginReducer = createReducer(
  initialState,
  on(TokensActions.setTokens, (state, { tokens }) => ({ token: tokens.token, refresh_token: tokens.refresh_token }))
);

export function reducer(state: State | undefined, action: Action) {
    return _succesfulLoginReducer(state, action);
}