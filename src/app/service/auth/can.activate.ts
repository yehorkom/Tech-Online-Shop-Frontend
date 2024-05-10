// import { inject } from '@angular/core';
// import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
// import {AuthService} from "./authentication.service";
// import {catchError, map} from "rxjs";
//
// export const canActivate = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//   const authService = inject(AuthService);
//   const router = inject(Router);
//   return authService.login().pipe(
//     map(() => true),
//     catchError(() => {
//       return router.createUrlTree(['route-to-fallback-page']);
//     })
//   );
// };
