import { createReducer, on } from '@ngrx/store';
import { loginSuccess } from '../actions/auth.actions';

interface AuthState {
  user: {
    email: any;
    displayName: any;
  };
}

const initialState: AuthState = {
  user: {
    email: '',
    displayName: '',
  },
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action: any) => action)
);
