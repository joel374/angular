// import {
//   createActionGroup,
//   createFeature,
//   createReducer,
//   props,
//   on,
// } from '@ngrx/store';

// export const AuthActions = createActionGroup({
//   source: 'Login',
//   events: {
//     'Login Success': props<{ displayName: any; email: any }>(),
//   },
// });

// interface AuthState {
//   email: any;
//   displayName: any;
// }

// const initialState: AuthState = {
//   email: '',
//   displayName: '',
// };

// export const authFeature = createFeature({
//   name: 'login',
//   reducer: createReducer(
//     initialState,
//     on(AuthActions.loginSuccess, (_, action) => action)
//   ),
// });

// export const selectAuthDisplayName = authFeature.selectDisplayName;
// export const selectAuthEmail = authFeature.selectEmail;
