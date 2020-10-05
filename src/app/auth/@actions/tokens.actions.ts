import { createAction, props } from '@ngrx/store';
import { Tokens } from '../@models/tokens';

export const setTokens = createAction('[Auth Service Login ] Login Succesful Set Tokens',  props<{tokens: Tokens }>());
