// // import { Injectable } from '@angular/core';
// // import { Actions, createEffect, ofType } from '@ngrx/effects';
// // import { of } from 'rxjs';
// // import { catchError, map, mergeMap } from 'rxjs/operators';
// // // import { AuthService } from '../../services/auth.service';
// // import * as AuthActions from '../actions/auth.actions';

// // @Injectable()
// // export class AuthEffects {
// //   login$ = createEffect(() =>
// //     this.actions$.pipe(
// //       ofType(AuthActions.loginSuccess),
// //       mergeMap((action) =>
// //         this.authService.login(action.user).pipe(
// //           map((user) => AuthActions.loginSuccess({ user })),
// //           catchError((error) => of(AuthActions.loginFailure({ error })))
// //         )
// //       )
// //     )
// //   );
// //   constructor(private actions$: Actions, private authService: AuthService) {}
// // }

// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { HttpClient } from '@angular/common/http';
// import { switchMap } from 'rxjs/operators';
// import { setLoggedIn } from './app.actions';

// @Injectable()
// export class AppEffects {

//   login$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(setLoggedIn),
//       switchMap(({loggedIn}) => this.http.post(`${environment.apiBaseUrl}/user/login`,
